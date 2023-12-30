import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerhomeRoutingModule } from './customerhome-routing.module';
import { CustomerhomeComponent } from './customerhome.component';
import {CustomerModule} from "../customer/customer.module";


@NgModule({
  declarations: [
    CustomerhomeComponent,
  ],
  imports: [
    CommonModule,
    CustomerhomeRoutingModule,
    CustomerModule
  ]
})
export class CustomerhomeModule { }
