import { Injectable } from '@angular/core';
import { CookieServices } from './cookie.service';
import { user } from '../types/user.type';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private cookieServices: CookieServices
  ) { }

  loginUser = async (userData: user) => {
    this.cookieServices.setCookie('UserData', JSON.stringify(userData));
    // this.router.navigateByUrl('/');
    window.location.reload();
  };

  logoutUser = async () => {
    this.cookieServices.deleteCookie('UserData');
    window.location.reload();
  };

  getUserData = async () => {
    // const userLoginDetails = {isUserLoggedIn: false, userData: {}};
    let isUserLoggedIn = false;
    let userData: user | undefined;
    const userCookie: string = await this.cookieServices.getCookie('UserData');
    if (userCookie) {
      const user: user = JSON.parse(userCookie);
      if (user) {
        isUserLoggedIn = true;
        userData = user;
      }
    }
    return {isUserLoggedIn: isUserLoggedIn, userData: userData};
  };
}
