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
import { user } from 'src/app/types/user.type';
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
    // pattern: /^[a-zA-Z0-9]{6,}$/,
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

  ngOnInit(): void {
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
    // this.minDate = new Date(currentYear - 13, 0, 1);
    this.maxDate = new Date(currentDate.setFullYear(currentDate.getFullYear() - this.allowedMinAge));

    // this.socketService.getNewMessage().subscribe(async(data) => {
    //   console.log(data);
    //   const responseData =  data as unknown as response;
    //   if (responseData.success) {
    //     //for registration success
    //     this.formType = 1;
    //     //for login success
    //     await this.login(responseData);
    //   }
    // });
    // this.socketService.getRegistrationResponse().subscribe(async(data) => {
    //   console.log(data);
    //   const responseData =  data as unknown as response;
    //   if (responseData.success) {
    //     //for registration success
    //     this.formType = 1;
    //     //for login success
    //     // await this.login(responseData);
    //   }
    // });
    this.registrationResponse = this.socketService.getRegistrationResponse().subscribe(async(data: unknown) => {
      console.log(data);
      const responseData =  data as unknown as response;
      if (responseData.success) {
        this.formType = 1;
      }
    });

    this.sendOtpResponse = this.socketService.getSendOtpResponse().subscribe(async(data: unknown) => {
      console.log(data);
      const responseData =  data as unknown as response;
      if (responseData.success) {
        await this.openValidateOtpForm(responseData);
      }
    });

    this.verifyOtpResponse = this.socketService.getVerifyOtpResponse().subscribe(async(data: unknown) => {
      console.log(data);
      const responseData =  data as unknown as response;
      if (responseData.success) {
        this.openRegistrationForm();
      }
    });

    this.loginResponse = this.socketService.getLoginResponse().subscribe(async (data) => {
      console.log(data);
      const userData = data as unknown as response;
      if (userData.success) {
        this.loginUser(userData);
      }
    });
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
    private loginservice: LoginService) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => {
        return false;
      };
    }

  submitRegistrationForm() {
    console.log(this.registrationForm.value);
    this.registrationForm.get('GENDER')?.setValue(parseInt(this.registrationForm.value.GENDER));
    this.registrationForm.get('TITLE')?.setValue(parseInt(this.registrationForm.value.TITLE));
    if (this.registrationForm.valid) {
      this.socketService.sendMessage('EventRegistration', this.registrationForm.getRawValue());
    }
  }

  submitLoginForm() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.socketService.sendMessage('EventLogin', (this.loginForm.value));
    }
  }

  /* Conver date object to string */
  date(e: Date) {
    const convertDate = new Date(e.toISOString().substring(0, 10));
    this.registrationForm.get('dob')?.setValue(convertDate, {
      onlyself: true
    });
  }

  toggleLoginForm() {
    this.formType++;
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  loginUser(data: response) {
    // this.cookieServices.setCookie('userData', JSON.stringify(userData.data.data));
    const userData = data.data.data as unknown as user;
    this.loginservice.loginUser(userData);
    this.closeModal();
    // this.loginUserEvent.emit();
  }

  // testWebsocket() {
  //   this.socketService.sendMessage('test', 'message');
  // }

  sendOtp() {
    if (this.otpForm.valid) {
      this.socketService.sendMessage('EventSendOTP', this.otpForm.value);
    }
  }

  validateOtp() {
    console.log(this.otpVerificationForm.value);
    if (this.otpVerificationForm.valid) {
      // this.otpVerificationForm!.get('OTP')!.value;
      console.log(this.otpVerificationForm.getRawValue());
      this.socketService.sendMessage('EventValidateOTP', this.otpVerificationForm.getRawValue());
    }
  }

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

  // login = async (data: response) => {
  //   this.cookieServices.setCookie('userData', JSON.stringify(data.data.data));
  //   // this.closeModal();
  //   window.location.reload();
  // };

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
    this.formType++;
    console.log(this.otpVerificationForm.getRawValue().EMAILID);
    const emailId = this.otpVerificationForm.getRawValue().EMAILID;
    this.registrationForm.patchValue({
      EMAILID: emailId
    });
  };
}