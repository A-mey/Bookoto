import { Injectable } from '@angular/core';
import { CookieServices } from './cookie.service';
import { User } from '../types/user.type';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private cookieServices: CookieServices,
    private socketService: SocketService
  ) { }

  loginUser = async () => {
    // this.cookieServices.setCookie('UserData', JSON.stringify(userData));
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
    let userData: User | undefined;
    const userCookie: string = await this.cookieServices.getCookie('UserData');
    if (userCookie) {
      const user: User = JSON.parse(userCookie);
      if (user) {
        isUserLoggedIn = true;
        userData = user;
      }
    }
    return {isUserLoggedIn: isUserLoggedIn, userData: userData};
  };

  manageSession = async () => {
    const sessionId: string = await this.cookieServices.getCookie('SessionId');
    if (sessionId) {
      this.verifySessionId(sessionId);
    } else {
      this.getSessionId();
    }
  };

  verifySessionId = async (sessionId: string) => {
    // const data = { SESSIONID: sessionId };
    // this.socketService.sendMessage('EventVerifySessionId', data);
  };
  
  getSessionId = async () => {
    return await this.cookieServices.getCookie('SessionId');
  };

  setSessionId = async (sessionId: string) => {
    this.cookieServices.setCookie('SessionId', sessionId);
  };

}
