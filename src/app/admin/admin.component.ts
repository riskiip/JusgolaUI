import { Component, OnInit } from '@angular/core';
import {APPROVAL_DATA} from "../model/admin.approval.model";
import {ProductService} from "../customer/product/product.service";
import {take} from "rxjs";
import {RegisterProductInput} from "../model/productDto";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['title', 'description', 'price', 'action'];
  dataSource: any;

  constructor(private productService: ProductService) { }

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
          // window.location.reload();
        }
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

}
