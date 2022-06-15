import { Injectable } from '@angular/core';
import { IProducts } from './IProducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProducts[] = [];
  total: number = 0;
  constructor() { }
  addToCart(product: IProducts): void {
    this.items.push(product);
  }
  
  getItems() {
    return this.items;
  }
  
  clearCart() {
    this.items = [];
    return this.items;
  }

  sumtotal() {
      for (let val of this.items){
            this.total += val.price;

      }
  return this.total;
}
}
