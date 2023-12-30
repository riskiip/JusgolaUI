import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerComponent} from "./customer/customer.component";
import {AppComponent} from "./app.component";
import {AdminComponent} from "./admin/admin.component";
import {HomeComponent} from "./merchant/home/home.component";
import {ProductComponent} from "./merchant/product/product.component";
import {ReportComponent} from "./merchant/report/report.component";
import {LoginComponent} from "./login/login.component";
import {CustomerhomeComponent} from "./customerhome/customerhome.component";
import {ReceiptComponent} from "./receipt/receipt.component";

const routes: Routes = [
  {
    path: '',
    component: CustomerhomeComponent
  },
  {
    path:'jusgola',
    component: AppComponent,
    children: [
      {
        path: '',
        component: CustomerhomeComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
      },
      {
        path: 'merchant',
        component: HomeComponent,
        children: [
          {
            path: 'products',
            component: ProductComponent
          },
          {
            path: 'report',
            component: ReportComponent
          }
        ]
      },
      {
        path: 'customer',
        component: CustomerComponent,
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'home',
        component: CustomerhomeComponent
      },
      {
        path: 'receipt',
        component: ReceiptComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }