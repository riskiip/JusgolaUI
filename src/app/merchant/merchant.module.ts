import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import { ProductComponent } from './product/product.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import { EditProductModalComponent } from './edit-product-modal/edit-product-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { ReportComponent } from './report/report.component';
import { AddProductModalComponent } from './add-product-modal/add-product-modal.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HomeComponent,
    ProductComponent,
    EditProductModalComponent,
    ReportComponent,
    AddProductModalComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        MatTableModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule
    ],
  exports: [
    SidebarComponent,
    ProductComponent
  ]
})
export class MerchantModule { }
