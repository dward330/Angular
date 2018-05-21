import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IProduct } from './product';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class ProductService implements OnDestroy {
  url: string = '../../api/products/products.json';
  products: Observable<IProduct[]>;

  constructor(private _httpClient: HttpClient) {  }

  getProducts(): Observable<IProduct[]> {

    if (!this.products) {
      this.products = this._httpClient.get<IProduct[]>(this.url)
                                      .catch(this.handleError);

      this.products.subscribe((data) => { console.log('All: ' + JSON.stringify(data));  });

      return this.products;
    }
    // tslint:disable-next-line:one-line
    else {
      return this.products;
    }
  }

  ngOnDestroy(): void {
    console.log('Warning: ProductService was Destroyed!');
  }

  private handleError(err: HttpErrorResponse): ErrorObservable {
    console.log('Error: ' + err.message);
    return Observable.throw(err.message);
  }
}
