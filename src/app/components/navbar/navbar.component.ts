import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userName: string = '';
  loginState: boolean = false;

  constructor(
    private dataservice: DataService,
    private loginService: LoginService) { }

  async ngOnInit() {
    await this.checkLogin();
  }

  openLoginForm() {
    this.dataservice.openForm();
  }

  async checkLogin() {
    const userDataCookie = await this.loginService.getUserData();
    if (userDataCookie.isUserLoggedIn && userDataCookie.userData) {
      this.loginState = true;
      this.userName = userDataCookie.userData?.FIRSTNAME;
    }
  }

  logout() {
    this.loginService.logoutUser();
  }
}
