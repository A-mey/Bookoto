import { Component } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { LoginService } from './services/login.service';
import { CookieServices } from './services/cookie.service';
import { response } from './types/response.types';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bookoto';
  loginState: boolean = false;
  userName: string = '';

  constructor(
    private socketService: SocketService,
    private loginService: LoginService,
    private cookieService: CookieServices) { }

  getSessionId = this.socketService.getSessionIdResponse().subscribe(async(data: unknown) => {
    if (data) {
      const responseData = data as unknown as response;
      if (responseData.success) {
        const data = responseData.data.data as {SESSIONID: string};
        const sessionId = data.SESSIONID;
        await this.setAnonymousUser(sessionId);
      }
    }
  });

  async ngOnInit() {
    await this.getSession();
  }

  getSession = async () => {
    await this.loginService.manageSession(); 
  };

  setAnonymousUser = async (sessionId: string) => {
    await this.loginService.setSessionId(sessionId);
  };

  
}
