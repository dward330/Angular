import { Injectable, OnInit } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { ProductService } from './product.service';
import { IProduct } from './product';

@Injectable()
export class ProductListResolverService implements Resolve<any> {

  constructor(private _productDataService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IProduct[]> {
    return this._productDataService.getProducts();
  }
}
