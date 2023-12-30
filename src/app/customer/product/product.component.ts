import { Component, OnInit } from '@angular/core';
import {Product, PRODUCT_DATA} from "../../model/product.model";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ReviewDialogComponent} from "../../review-dialog/review-dialog.component";
import {ProductService} from "./product.service";
import {take} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  dataSources!: any;

  constructor(
    private dialog: MatDialog,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.inquiryAllVerifiedProduct()
      .pipe(take(1))
      .subscribe((response) => {
        if (response) {
          this.dataSources = response;
        }
      })
  }

  openConfirmationDialog(product: Product) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      data: {
        name: product.name,
        price: product.price
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      } else {
      }
    });
  }

  openReviewDialog(dataSource: any): void {
    const dialogRef = this.dialog.open(ReviewDialogComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

  purchaseProduct() {
    this.productService.purchaseProduct()
      .pipe(take(1))
      .subscribe((res) => {
        window.open(res);
      })
    // window.open('https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-1AJ28718E7729853L');
  }
}
