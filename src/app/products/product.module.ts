import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductGuardService } from './product-guard.service';
import { ProductListResolverService } from './product-list-resolver.service';
import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', resolve: {productDetail: ProductListResolverService}, component: ProductListComponent },
      { path: 'products/:id',
        canActivate: [ProductGuardService],
        component: ProductDetailComponent}
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  providers: [ProductService, ProductGuardService, ProductListResolverService]
})
export class ProductModule { }
