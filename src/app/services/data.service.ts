import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable()
export class DataService {
  private nameSource = new BehaviorSubject<string>('service');
  name = this.nameSource.asObservable();
  constructor() { }

  openForm() {
    this.nameSource.next('openLoginModal');
  }
}