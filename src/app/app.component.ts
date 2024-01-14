import { Component } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { LoginService } from './services/login.service';
import { CookieServices } from './services/cookie.service';
import { Response } from './types/response.types';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bookoto';
  userName: string = '';
  
  private getSessionData: Subscription = new Subscription;
  private getSessionId: Subscription = new Subscription;
  firstName: string = '';
  userData: { ISLOGGEDIN: 0 | 1; FIRSTNAME: string } | undefined;

  constructor(
    private socketService: SocketService,
    private loginService: LoginService,
    private cookieService: CookieServices) { }

  async ngOnInit() {
    await this.getSession();

    // this.getSessionData = this.socketService.getVerifySessionId().subscribe(async(data: unknown) => {
    //   if (data) {
    //     const responseData = data as unknown as Response;
    //     if (responseData.success) {
    //       const sessionResponse = responseData.data.data as {TYPE: 1|0, sessionId: string, sessionData: object} | null;
    //       if (sessionResponse?.TYPE === 0) {
    //         const sessionId = sessionResponse.sessionId;
    //         await this.setAnonymousUser(sessionId);
    //       } else if (sessionResponse?.TYPE === 1) {
    //         const sessionData = sessionResponse.sessionData as {ISLOGGEDIN: 0|1, FIRSTNAME: string};
    //         if (sessionData.ISLOGGEDIN === 1) {
    //           this.userData = sessionData;
    //         }
    //       }
    //     }
    //   }
    // });

    // this.getSessionId = this.socketService.getSessionIdResponse().subscribe(async(data: unknown) => {
    //   if (data) {
    //     const responseData = data as unknown as Response;
    //     if (responseData.success) {
    //       const data = responseData.data.data as {SESSIONID: string};
    //       const sessionId = data.SESSIONID;
    //       await this.setAnonymousUser(sessionId);
    //     }
    //   }
    // });
  }

  async ngOnDestroy() {
    this.getSessionData.unsubscribe();
    this.getSessionId.unsubscribe();
  }

  getSession = async () => {
    await this.loginService.manageSession(); 
  };

  setAnonymousUser = async (sessionId: string) => {
    await this.loginService.setSessionId(sessionId);
  };
}
