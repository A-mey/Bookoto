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

  getCookie = async(key: string): Promise<string> => {
    return this.cookieService.get(key);
  };

  deleteCookie = async(key: string): Promise<void> => {
    this.cookieService.delete(key);
  };
}
