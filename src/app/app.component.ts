import { Component } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { LoginService } from './services/login.service';
import { CookieServices } from './services/cookie.service';
import { Response } from './types/response.types';
import { Subscription } from 'rxjs';
import { HttpService } from './services/http-service.service';
import { environment } from 'src/environments/environment';
import { Startup } from './types/startup.type';
import { Product } from './types/product.type';

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
  subscription: Subscription[] = [];
  products: Product[] = [];

  constructor(
    private socketService: SocketService,
    private loginService: LoginService,
    private cookieService: CookieServices,
    private httpService: HttpService) { }

  async ngOnInit() {
    await this.startupRequest();
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

  startupRequest = async () => {
    try {
      const url = environment.startupUrl;
      this.subscription.push(this.httpService.getRequest(url).subscribe(async (response: unknown) => {
        const startupResponse =  response as unknown as Response;
        console.log('startupResponse', startupResponse);
        const startupData = startupResponse.data.data as unknown as Startup;
        await this.manageStartup(startupData);
      }));
    } catch (error: unknown) {
      console.log(error);
    }
  };

  manageStartup = async (startupResponse: Startup) => {
    try {
      this.products = startupResponse.PRODUCTS;
    } catch (error: unknown) {
      console.log(error);
    }
  };
}
