import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { SocketService } from 'src/app/services/socket.service';
import { ConfirmPasswordValidator } from 'src/app/common/confirm-password';
import { LoginForm } from 'src/app/enums/login.enum';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { Observable, Subscription, scan, takeWhile, timer } from 'rxjs';
import {response} from './../../types/response.types';
import { CookieServices } from 'src/app/services/cookie.service';
import { fullHash } from 'src/app/types/fullHash.type';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { HttpServiceService } from '../../services/http-service.service';
// import { user } from 'src/app/types/user.type';
// import { map, timer, takeWhile } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  timer$!: Observable<number>;
  seconds!: number;
  emailIdOtp!: string;
  registrationForm!: FormGroup;
  // registrationForm!: FormGroup<{TITLE<string | null>; FIRSTNAME<string | null>; LASTNAME<string | null>; EMAILID<string | null>; GENDER<string | null>; DOB<string | null>; PASSWORD<string | null>; PASSWORD2<string | null>}>;
  loginForm!: FormGroup<{ EMAILID: FormControl<string | null>; PASSWORD: FormControl<string | null>; }>;
  otpForm!: FormGroup<{ EMAILID: FormControl<string | null>; }>;
  otpVerificationForm!: FormGroup<{ EMAILID: FormControl<string | null>; OTP: FormControl<string | null>; HASH: FormControl<string | null> }>;

  formType: number = LoginForm.Login;
  maxDate!: Date;

  otpSeconds!: number;

  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,
    autofocus: true,
    classList: {
      inputBox: 'my-super-box-class',
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disable-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class'
    }
  };



  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() loginUserEvent = new EventEmitter<void>();

  allowedMinAge: number = 13;
  fullHash!: string;  
  registrationResponse!: Subscription;
  sendOtpResponse!: Subscription;
  verifyOtpResponse!: Subscription;
  loginResponse!: Subscription;
  submissionErrorMsg: string = '';

  public submissionErrorMsgString$ = Observable.create((observer: { next: (arg0: number) => void; }) => {
    observer.next(this.formType);
  });
  sessionId: string = '';

  // public submissionErrorMsgString$ = new Subject();

  async ngOnInit(): Promise<void> {

    this.sessionId = await this.cookieServices.getCookie('SessionId');

    this.submissionErrorMsgString$.subscribe(() => {
      this.submissionErrorMsg = '';
    });

    this.otpSeconds = 120;

    const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i;
    // const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/i;
    const emailRegex: RegExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    const alphabet: RegExp = /^[a-zA-Z]+$/i;
    this.registrationForm = this.fb.group({
      TITLE:['1', Validators.required],
      FIRSTNAME: ['', [Validators.required, Validators.pattern(alphabet)]],
      LASTNAME: ['', Validators.pattern(alphabet)],
      EMAILID: [{value: '', disabled: true}, [Validators.required, Validators.pattern(emailRegex)]],
      GENDER: ['1'],
      DOB: [''],
      PASSWORD: ['', [Validators.required, Validators.minLength(8), Validators.pattern(passwordRegex)]],
      PASSWORD2: ['', [Validators.required, Validators.minLength(8), Validators.pattern(passwordRegex)]],
    },
    {
      validator: ConfirmPasswordValidator('PASSWORD', 'PASSWORD2'),
    });

    this.loginForm = this.fb.group({
      EMAILID: ['', [Validators.required, Validators.pattern(emailRegex)]],
      PASSWORD: ['', [Validators.required, Validators.minLength(8), Validators.pattern(passwordRegex)]]
    });

    this.otpForm = this.fb.group({
      EMAILID: ['', [Validators.required, Validators.pattern(emailRegex)]],
      
    });

    this.otpVerificationForm = this.fb.group({
      EMAILID: [{value: '', disabled: true}, [Validators.required, Validators.pattern(emailRegex)]],
      OTP: ['', [Validators.required, Validators.minLength(6)]],
      HASH: ['', [Validators.required]]
    });

    const currentDate = new Date();
    this.maxDate = new Date(currentDate.setFullYear(currentDate.getFullYear() - this.allowedMinAge));
  }

  ngOnDestroy() {
    this.registrationResponse.unsubscribe();
    this.verifyOtpResponse.unsubscribe();
    this.sendOtpResponse.unsubscribe();
    this.loginResponse.unsubscribe();
  }

  constructor(
    public fb: FormBuilder,
    private socketService: SocketService,
    private cookieServices: CookieServices,
    private router: Router,
    private loginservice: LoginService,
    private httpService: HttpServiceService) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => {
        return false;
      };
    }

  submitRegistrationForm = async () => {
    await this.setRegistrationForm();
    if (this.registrationForm.valid) {
      const registrationFormValue = this.registrationForm.getRawValue() as unknown as object;
      const registrationResponse = await this.sendRegistrationRequest(registrationFormValue);
      await this.processRegistration(registrationResponse);
    }
  };

  submitLoginForm = async () => {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      const loginFormValue = this.loginForm.value as unknown as object;
      const loginResponse = await this.sendLoginRequest(loginFormValue);
      await this.processLogin(loginResponse);
    }
  };

  /* Conver date object to string */
  date(e: Date) {
    const convertDate = new Date(e.toISOString().substring(0, 10));
    this.registrationForm.get('dob')?.setValue(convertDate, {
      onlyself: true
    });
  }

  toggleLoginForm() {
    this.submissionErrorMsg = '';
    this.formType++;
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  loginUser() {
    this.loginservice.loginUser();
    this.closeModal();
  }

  sendOtp = async () => {
    if (this.otpForm.valid) {
      const otpFormValue = this.otpForm.value as unknown as object;
      const otpResponse = await this.sendOtpRequest(otpFormValue);
      await this.processOtp(otpResponse);
    }
  };

  validateOtp = async () => {
    console.log(this.otpVerificationForm.value);
    if (this.otpVerificationForm.valid) {
      const verifyOtpValue = this.otpVerificationForm.getRawValue() as unknown as object;
      const verifyOtpResponse = await this.sendVerifyOtpRequest(verifyOtpValue);
      await this.processVerifyOtp(verifyOtpResponse);
    }
  };

  startTimer(otpSeconds: number) {
    this.timer$ = timer(0, 1000).pipe(
      scan(acc => --acc, otpSeconds),
      takeWhile(x => x >= 0)
    );

    this.timer$.subscribe({
      next: (value: number) => {
        // This block will be executed when the observable emits a value
        this.otpSeconds = value; // Store the emitted value in the resultNumber variable
      },
      complete: () => {
        // This block will be executed when the observable completes (optional)
        console.log('Observable completed');
      },
      error: (error: unknown) => {
        // This block will be executed if there's an error (optional)
        console.error('Error:', error);
      },
    });
  }

  handeOtpChange(value: string[]): void {
    console.log(value);
  }

  handleFillEvent(value: string): void {
    // console.log(value);
    this.otpVerificationForm.patchValue({
      OTP: value
    });
  }

  openValidateOtpForm = async (responseData: response) => {
    const hashData: fullHash = responseData.data.data as unknown as fullHash;
    this.formType++;
    const otpSeconds = 120;
    this.startTimer(otpSeconds);
    this.otpVerificationForm.patchValue({
        EMAILID: this.otpForm.value.EMAILID,
        HASH: hashData.fullHash
    });
  };

  openRegistrationForm = async () => {
    this.submissionErrorMsg = '';
    this.formType++;
    console.log(this.otpVerificationForm.getRawValue().EMAILID);
    const emailId = this.otpVerificationForm.getRawValue().EMAILID;
    this.registrationForm.patchValue({
      EMAILID: emailId
    });
  };

  openPreviousForm = async() => {
    this.formType--;
    this.submissionErrorMsg = '';
  };

  sendRegistrationRequest = async (formValue: object) : Promise<response> => {
    const url = '';
    const data = this.httpService.postRequest(url, formValue);
    const registrationResponseData =  data as unknown as response;
    return registrationResponseData;
  };

  setRegistrationForm = async () => {
    this.registrationForm.get('GENDER')?.setValue(parseInt(this.registrationForm.value.GENDER));
    this.registrationForm.get('TITLE')?.setValue(parseInt(this.registrationForm.value.TITLE));
  };

  processRegistration = async (responseData: response) => {
    if (responseData.success) {
      this.formType = 1;
    }
    else {
      this.submissionErrorMsg = responseData.data.message;
    }
  };

  sendLoginRequest = async (formValue: object) => {
    const url = '';
    const loginResponse = this.httpService.postRequest(url, formValue);
    const loginResponseData =  loginResponse as unknown as response;
    return loginResponseData;
  };

  processLogin = async (loginData: response) => {
    if (loginData.success) {
      this.loginUser();
    }
    else {
      this.submissionErrorMsg = loginData.data.message;
    }
  };

  sendOtpRequest = async (otpData: object): Promise<response> => {
    const url = '';
    const data = this.httpService.postRequest(url, otpData);
    const otpResponse =  data as unknown as response;
    return otpResponse;
  };

  processOtp = async (otpresponse: response) => {
    if (otpresponse.success) {
      await this.openValidateOtpForm(otpresponse);
    }
    else {
      this.submissionErrorMsg = otpresponse.data.message;
    }
  };

  sendVerifyOtpRequest = async (verifyOtp: object) => {
    const url = '';
    const data = this.httpService.postRequest(url, verifyOtp);
    const verifyOtpResponse =  data as unknown as response;
    return verifyOtpResponse;
  };

  processVerifyOtp = async (verifyOtpData: response) => {
    if (verifyOtpData.success) {
      this.openRegistrationForm();
    }
    else {
      this.submissionErrorMsg = verifyOtpData.data.message;
    }
  };
}