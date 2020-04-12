import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: any[];
  constructor() {
    this.products = environment.products;

  }

  getProducts(itemCount: number, returnAll: boolean) {
    if (returnAll) {
      return this.products;
    } else {
      return this.products.slice(0, itemCount);
    }
  }

  getProductData(id) {
    let productData: any;
    this.products.forEach(product => {
      if (product.link === id) {
        productData = product;
      }
    });
    if (productData) {
      return productData;
    }
    return null;
  }
}


