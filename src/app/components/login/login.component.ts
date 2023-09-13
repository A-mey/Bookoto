import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SocketService } from 'src/app/services/socket.service.ts.service';
import { ConfirmPasswordValidator } from 'src/app/common/confirm-password';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  registrationForm!: FormGroup;
  loginForm!: FormGroup;
  showLoginForm: boolean = true;
  maxDate!: Date;

  @Output() closeModalEvent = new EventEmitter<void>();

  ngOnInit(): void {
    const passwordRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$';
    const alphabet = '^[a-zA-Z]+$';
    this.registrationForm = this.fb.group({
      TITLE:['Mr', Validators.required],
      FIRSTNAME: ['', [Validators.required, Validators.pattern(alphabet)]],
      LASTNAME: ['', Validators.pattern(alphabet)],
      EMAILID: ['', [Validators.required, Validators.email]],
      GENDER: ['M'],
      DOB: [''],
      PASSWORD: ['', [Validators.required, Validators.minLength(8), Validators.pattern(passwordRegex)]],
      PASSWORD2: ['', [Validators.required, Validators.minLength(8), Validators.pattern(passwordRegex)]],
    },
    {
      validator: ConfirmPasswordValidator('PASSWORD', 'PASSWORD2'),
    });

    this.loginForm = this.fb.group({
      EMAIL: ['', [Validators.required, Validators.email]],
      PASSWORD: ['', [Validators.required, Validators.minLength(8), Validators.pattern(passwordRegex)]]
    });

    const currentDate = new Date();
    // this.minDate = new Date(currentYear - 13, 0, 1);
    this.maxDate = new Date(currentDate.setFullYear(currentDate.getFullYear() - 13));

    this.socketService.getNewMessage().subscribe((data) => {
      console.log(data);
    });

  }

  constructor(public fb: FormBuilder, private socketService: SocketService) {}

  submitRegistrationForm() {
    console.log(this.registrationForm.value);
    if (this.registrationForm.valid) {
      this.socketService.sendMessage('EventRegistration', this.registrationForm.value);
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

  toggleLoginForm(formType: string) {
    this.showLoginForm = formType === 'LoginForm'? true : false;
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  testWebsocket() {
    this.socketService.sendMessage('test', 'message');
  }
}