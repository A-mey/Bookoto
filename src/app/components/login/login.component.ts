import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { SocketService } from 'src/app/services/socket.service';
import { ConfirmPasswordValidator } from 'src/app/common/confirm-password';
import { LoginForm } from 'src/app/enums/login.enum';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { Observable, scan, takeWhile, timer } from 'rxjs';
import {response} from './../../types/response.types';
import { CookieServices } from 'src/app/services/cookie.service';
import { fullHash } from 'src/app/types/fullHash.type';
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
  loginForm!: FormGroup;
  otpForm!: FormGroup<{ EMAIL: FormControl<string | null>; }>;
  otpVerificationForm!: FormGroup<{ EMAIL: FormControl<string | null>; OTP: FormControl<string | null>; }>;

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
  allowedMinAge: number = 13;
  fullHash!: string;
  

  ngOnInit(): void {
    this.otpSeconds = 120;
    const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/i;
    const emailRegex: RegExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    const alphabet: RegExp = /^[a-zA-Z]+$/i;
    this.registrationForm = this.fb.group({
      TITLE:['1', Validators.required],
      FIRSTNAME: ['', [Validators.required, Validators.pattern(alphabet)]],
      LASTNAME: ['', Validators.pattern(alphabet)],
      EMAILID: [{value: '', disabled: true}, [Validators.required, Validators.pattern(emailRegex)]],
      GENDER: ['M'],
      DOB: [''],
      PASSWORD: ['', [Validators.required, Validators.minLength(8), Validators.pattern(passwordRegex)]],
      PASSWORD2: ['', [Validators.required, Validators.minLength(8), Validators.pattern(passwordRegex)]],
    },
    {
      validator: ConfirmPasswordValidator('PASSWORD', 'PASSWORD2'),
    });

    this.loginForm = this.fb.group({
      EMAIL: ['', [Validators.required, Validators.pattern(emailRegex)]],
      PASSWORD: ['', [Validators.required, Validators.minLength(8), Validators.pattern(passwordRegex)]]
    });

    this.otpForm = this.fb.group({
      EMAIL: ['', [Validators.required, Validators.pattern(emailRegex)]],
      
    });

    this.otpVerificationForm = this.fb.group({
      EMAIL: [{value: '', disabled: true}, [Validators.required, Validators.pattern(emailRegex)]],
      OTP: ['', [Validators.required, Validators.minLength(6)]]
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
    this.socketService.getRegistrationResponse().subscribe(async(data: unknown) => {
      console.log(data);
      const responseData =  data as unknown as response;
      if (responseData.success) {
        this.formType = 1;
      }
    });

    this.socketService.getSendOtpResponse().subscribe(async(data: unknown) => {
      console.log(data);
      const responseData =  data as unknown as response;
      if (responseData.success) {
        const hashData: fullHash = responseData.data.data as unknown as fullHash;
        this.fullHash = hashData.fullHash;
        this.formType++;
      }
    });

    this.socketService.getVerifyOtpResponse().subscribe(async(data: unknown) => {
      console.log(data);
      const responseData =  data as unknown as response;
      if (responseData.success) {
        this.formType = 1;
      }
    });
  }
  constructor(
    public fb: FormBuilder,
    private socketService: SocketService,
    private cookieServices: CookieServices) {}

  submitRegistrationForm() {
    console.log(this.registrationForm.value);
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
    this.formType = this.formType === 1 ? 2 : this.formType === 4? 1 : 1;
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  testWebsocket() {
    this.socketService.sendMessage('test', 'message');
  }

  sendOtp() {
    const otpSeconds = 120;
    // this.emailIdOtp = this.otpForm.value.EMAIL!;
    this.startTimer(otpSeconds);
    if (this.otpForm.valid) {
      this.formType++;
    }
    // this.otpVerificationForm.value.EMAIL = this.otpForm.value.EMAIL;
    this.otpVerificationForm.patchValue({
        EMAIL: this.otpForm.value.EMAIL
    });
  }

  validateOtp() {
    console.log(this.otpVerificationForm.value);
    if (this.otpVerificationForm.valid) {
      // this.otpVerificationForm!.get('OTP')!.value;
      console.log(this.otpVerificationForm.getRawValue());
      this.formType++;
      console.log(this.otpVerificationForm.getRawValue().EMAIL);
      const emailId = this.otpVerificationForm.getRawValue().EMAIL;
      this.registrationForm.patchValue({
        EMAILID: emailId
    });
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

  login = async (data: response) => {
    this.cookieServices.setCookie('userData', JSON.stringify(data.data.data));
    // this.closeModal();
    window.location.reload();
  };

  
  
}