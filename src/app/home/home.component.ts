import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts(3, false);
  }

}
