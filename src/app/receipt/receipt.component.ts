import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ConfirmationDialogData} from "../model/confirmation.model";
import {ConfirmationDialogComponent} from "../customer/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ReceiptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
