import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
    declarations: [
        CustomerComponent,
        ConfirmationDialogComponent,
        NavbarComponent,
        ProductComponent,
    ],
    exports: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        HttpClientModule,
        MatDialogModule,
        MatButtonModule
    ]
})
export class CustomerModule { }
