import { Component, Input, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  loginState: boolean = false;

  @Input() userData: { isLoggedIn: 0 | 1; userData: { firstName: string; lastName: string; }} | undefined;
  userName: string | undefined;

  constructor(
    private dataservice: DataService,
    private loginService: LoginService) { }

  async ngOnInit() {
    // this.loginState = this.userData?.isLoggedIn === 1? true: false;
    // if (this.loginState) {
    //   this.userName = this.userData?.userData.firstName;
    // }
  }

  async ngOnChanges(changes: SimpleChanges) {
    const isUserLoggedIn = changes['userData'];
    if (isUserLoggedIn.currentValue) {
      const userData = isUserLoggedIn.currentValue;
      this.loginState = userData?.isLoggedIn === 1? true: false;
      if (this.loginState) {
        this.userName = userData?.userData.firstName;
      }
    }
  }

  openLoginForm() {
    this.dataservice.openForm();
  }

  logout() {
    // this.loginService.logoutUser();
  }
}
