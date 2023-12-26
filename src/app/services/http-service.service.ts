import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { CookieServices } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  sessionId: string = '';
  token: string = '';

  constructor(private http: HttpClient,
    private cookieServices: CookieServices) {
        this.sessionId = this.cookieServices.getCookie('SESSION_ID');
        this.token = this.cookieServices.getCookie('TOKEN');
    }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'SESSION_ID': this.sessionId,
      'TOKEN': this.token
    }),
  };

  getRequest(url: string): Observable<unknown> {
    return this.http
      .get<unknown>(url)
      .pipe(retry(1), catchError(this.handleError));
  }

  postRequest(url: string, data: object): Observable<unknown> {
    return this.http
      .post<unknown>(
        url,
        JSON.stringify(data),
        this.httpOptions
        )
        .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error: {error: ErrorEvent, status: unknown, message: string}) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}