import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!isNaN(+route.paramMap.get('id'))) {
      return true;
    }
    // tslint:disable-next-line:one-line
    else {
      alert('Supplied Paramerter needs to be a number! You will not be able to proceed to this page. ');
      this._router.navigate(['/products']);
      return false;
    }
  }

}
