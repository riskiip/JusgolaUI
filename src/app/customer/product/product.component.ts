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
  notLoading = true;

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
      }, (err) => {
        window.alert(err.error.message);
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
      data: {data: dataSource}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

  purchaseProduct(event: any) {
    localStorage.setItem('productId', event[0]._id);
    this.notLoading = false;
    this.productService.purchaseProductOnline()
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          window.open(res, "_self");
        }
      }, (err) => {
        window.alert(err.error.message);
      })
  }
}
