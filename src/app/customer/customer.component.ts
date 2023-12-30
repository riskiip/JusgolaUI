import { Component, OnInit } from '@angular/core';
import {PRODUCT_DATA} from "../model/product.model";
import {ConfirmationDialogComponent} from "./confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  dataSources= PRODUCT_DATA;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openConfirmationDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      } else {
      }
    });
  }
}
