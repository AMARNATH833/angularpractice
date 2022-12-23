import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    ProductComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
