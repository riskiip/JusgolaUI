import { Component, OnInit } from '@angular/core';
import {APPROVAL_DATA} from "../model/admin.approval.model";
import {ProductService} from "../customer/product/product.service";
import {take} from "rxjs";
import {RegisterProductInput} from "../model/productDto";
import {LogoutInput} from "../model/loginDto";
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['title', 'description', 'price', 'action'];
  dataSource: any;

  constructor(private productService: ProductService,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.inquiryNotVerifiedProduct()
  }

  inquiryNotVerifiedProduct() {
    this.productService.inquiryNotVerifiedProduct()
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.dataSource = res;
        }
      });
  }

  approveStatus(element: any) {
    const editPayload: RegisterProductInput = {
      ministry_status: true
    }
    this.productService.updateProduct(element._id, editPayload)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          window.location.reload();
        }
      }, (err) => {
        window.alert(err.error.message);
      })
  }

  rejectStatus(element: any) {
    this.productService.deleteProduct(element._id)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          // window.location.reload();
        }
      });
  }

  onLogout() {
    let logoutPayload: LogoutInput = {
      cookieToken: localStorage.getItem('refreshToken')
    }
    this.loginService.logout(logoutPayload)
      .subscribe(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userId');
        this.router.navigate(['/jusgola']);
        window.alert("Successfully logout");
      });
  }

}
