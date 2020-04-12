import { ProductService } from './../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productId: string;
  productsList: any[];
  productData: any;
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.getSelectedProductData(this.productId);
  }

  getSelectedProductData(id) {

    this.productData = this.productService.getProductData(id);

    if (!this.productData) {
      this.router.navigateByUrl('404');
    }

  }

}
