import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {}

  socket = io('http://localhost:4100', {transports: ['websocket']});

  public sendMessage(event: string, message: unknown) {
    console.log('sendMessage: ', message);
    this.socket.emit(event, message);
  }

  public getNewMessage = () => {
    this.socket.on('EventLoginResponse', (message) => {
      console.log(message);
      this.message$.next(message);
    });

    return this.message$.asObservable();
  };
}
