import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io } from 'socket.io-client';
// import {events} from '../enums/events.enum';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {}

  socket = io('http://localhost:4001', {transports: ['websocket']});

  public sendMessage(event: string, message: unknown) {
    console.log('sendMessage: ', message);
    this.socket.emit(event, message);
  }

  // public getNewMessage = () => {
  //   const eventKeys = Object.keys(events);
  //   eventKeys.forEach((event) => {
  //     this.socket.on(event, (message) => {
  //       console.log(message);
  //       this.message$.next(message);
  //     });
  //   });
  //   return this.message$.asObservable();
  // };
  public getRegistrationResponse = () => {
    this.socket.on('EventRegistrationRes', (message) => {
      this.message$.next(message);
    });
    return this.message$.asObservable();
  };

  public getLoginResponse = () => {
    this.socket.on('EventLoginRes', (message) => {
      this.message$.next(message);
    });
    return this.message$.asObservable();
  };

  public getSendOtpResponse = () => {
    this.socket.on('EventSendOTPRes', (message) => {
      this.message$.next(message);
    });
    return this.message$.asObservable();
  };

  public getVerifyOtpResponse = () => {
    this.socket.on('EventValidateOTPRes', (message) => {
      this.message$.next(message);
    });
    return this.message$.asObservable();
  };
}
