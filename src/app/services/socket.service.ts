import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io } from 'socket.io-client';
import {events} from '../enums/events.enum';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public registration$: BehaviorSubject<string> = new BehaviorSubject('');
  public login$: BehaviorSubject<string> = new BehaviorSubject('');
  public sendOtp$: BehaviorSubject<string> = new BehaviorSubject('');
  public verifyOtp$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {}

  socket = io('http://localhost:4001', {transports: ['websocket']});

  public sendMessage(event: keyof typeof events, message: unknown) {
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
      this.registration$.next(message);
    });
    return this.registration$.asObservable();
  };

  public getLoginResponse = () => {
    this.socket.on('EventLoginRes', (message) => {
      this.login$.next(message);
    });
    return this.login$.asObservable();
  };

  public getSendOtpResponse = () => {
    this.socket.on('EventSendOTPRes', (message) => {
      this.sendOtp$.next(message);
    });
    return this.sendOtp$.asObservable();
  };

  public getVerifyOtpResponse = () => {
    this.socket.on('EventValidateOTPRes', (message) => {
      this.verifyOtp$.next(message);
    });
    return this.verifyOtp$.asObservable();
  };
}
