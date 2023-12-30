import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Product} from "../../model/product.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../customer/product/product.service";
import {RegisterProductInput} from "../../model/productDto";
import {take} from "rxjs";

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.scss']
})
export class EditProductModalComponent implements OnInit {
  editProductForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    public dialogRef: MatDialogRef<EditProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: any }
  ) {
    this.editProductForm = this.fb.group({
      title: new FormControl(null),
      description: new FormControl(null),
      price: new FormControl(null)
    })
  }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onEditSave() {
    const editPayload: RegisterProductInput = {
      title: this.editProductForm.get('title')?.value,
      description: this.editProductForm.get('description')?.value,
      price: this.editProductForm.get('price')?.value
    }
    this.productService.updateProduct(this.data.product._id, editPayload)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.dialogRef.close();
          window.location.reload();
        }
      })
  }

}
