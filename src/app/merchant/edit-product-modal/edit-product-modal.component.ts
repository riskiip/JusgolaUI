import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Product} from "../../model/product.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.scss']
})
export class EditProductModalComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<EditProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product }
  ) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}