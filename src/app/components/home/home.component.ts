import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  modalState: string = 'CLOSED';
  constructor(private dataservice: DataService) { }
  ngOnInit() {

    this.dataservice.name.subscribe(data  =>{
      if (data === 'openLoginModal') {
        this.modalState = 'OPEN';
      }
    });
  }

  closeModal() {
    this.modalState = 'CLOSED';
  }

}
