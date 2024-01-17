import { Component, Input, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/types/product.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  @Input() products: Product[] = [];

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    this.products = changes['products'].currentValue;
  }
  
}
