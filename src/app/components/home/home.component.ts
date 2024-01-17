import { Component, Input, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { SocketService } from 'src/app/services/socket.service';
import { CookieServices } from 'src/app/services/cookie.service';
import { Product } from '../../types/product.type';
// import { response } from 'src/app/types/response.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  modalState: string = 'CLOSED';

  @Input() products: Product[] = [];
  // get products(): Product[] { return this._products; }
  // set products(products: Product[]) {
  //   this._products = products;
  // }
  // private _products: Product[] = [];


  constructor(
    private dataservice: DataService,
    private socketService: SocketService,
    private cookieServices: CookieServices
    ) { }

  ngOnInit() {

    this.dataservice.name.subscribe(data  =>{
      if (data === 'openLoginModal') {
        this.modalState = 'OPEN';
      }
      else if (data === 'closeLoginModal') {
        this.modalState = 'CLOSED';
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    this.products = changes['products'].currentValue;
    console.log('products', this.products);
  }

  closeModal() {
    this.modalState = 'CLOSED';
  }

}
