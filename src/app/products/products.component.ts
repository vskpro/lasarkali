import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts(0, true);
  }

}
