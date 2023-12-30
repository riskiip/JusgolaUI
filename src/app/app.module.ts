import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomerModule} from "./customer/customer.module";
import {AdminModule} from "./admin/admin.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MerchantModule} from "./merchant/merchant.module";
import {HomeModule} from "./merchant/home/home.module";
import {CustomerhomeModule} from "./customerhome/customerhome.module";
import { ReceiptComponent } from './receipt/receipt.component';
import { ReviewDialogComponent } from './review-dialog/review-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    ReceiptComponent,
    ReviewDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    AdminModule,
    BrowserAnimationsModule,
    MerchantModule,
    HomeModule,
    CustomerhomeModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
