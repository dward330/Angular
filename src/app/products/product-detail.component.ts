import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

import 'rxjs/add/operator/take';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail Page';
  product: IProduct;

  constructor(private _route: ActivatedRoute, private _productService: ProductService, private _router: Router) {
  }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    console.log('The product id we are trying to load is ' + id);

    this._productService.getProducts().subscribe((data) => this.product = data.filter((x) => (x.productId === id))[0]);


  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
