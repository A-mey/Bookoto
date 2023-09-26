import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class CookieServices {

  constructor(private cookieService: CookieService) { }

  setCookie = async(key: string, value: string): Promise<void> => {
    this.cookieService.set(key, value);
  };


}
