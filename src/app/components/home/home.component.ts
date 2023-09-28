import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { SocketService } from 'src/app/services/socket.service';
import { CookieServices } from 'src/app/services/cookie.service';
// import { response } from 'src/app/types/response.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  modalState: string = 'CLOSED';
  constructor(private dataservice: DataService, private socketService: SocketService, private cookieServices: CookieServices) { }
  ngOnInit() {

    this.dataservice.name.subscribe(data  =>{
      if (data === 'openLoginModal') {
        this.modalState = 'OPEN';
      }
      else if (data === 'closeLoginModal') {
        this.modalState = 'CLOSED';
      }
    });

    // this.socketService.getLoginResponse().subscribe(async (data) => {
    //   console.log(data);
    //   const userData = data as unknown as response;
    //   if (userData.success) {
    //     this.cookieServices.setCookie('userData', JSON.stringify(userData.data.data));
    //   }
    // });
  }

  closeModal() {
    this.modalState = 'CLOSED';
  }

}
