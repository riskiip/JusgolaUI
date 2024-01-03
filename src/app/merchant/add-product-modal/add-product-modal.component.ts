import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Product} from "../../model/product.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../customer/product/product.service";
import {take} from "rxjs";
import {RegisterProductInput} from "../../model/productDto";

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss']
})
export class AddProductModalComponent {
  productForm: FormGroup;
  imageFile!: File;

  formData: Product = {
    name: '',
    price: 0,
    position: 0,
    image: ''
  };

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    public dialogRef: MatDialogRef<AddProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {
    this.productForm = this.fb.group({
      title: new FormControl(null),
      description: new FormControl(null),
      price: new FormControl(null),
      quantity: new FormControl(null),
      image: new FormControl(null)
    })
  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onSaveClick(): void {
    const productPayload: RegisterProductInput = {
      title: this.productForm.get('title')?.value,
      description: this.productForm.get('description')?.value,
      price: this.productForm.get('price')?.value,
      quantity: this.productForm.get('quantity')?.value
    }

    this.productService.registerNewProduct(productPayload)
      .pipe(take(1))
      .subscribe((response) => {
        if (response) {
          this.uploadImageToProduct(response._id, this.imageFile);
        }
      }, (err) => {
        window.alert(err.error.message);
      })
  }

  uploadImageToProduct(id: string, image: File) {
    this.productService.uploadProductImage(id, image)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.dialogRef.close(this.formData);
          window.location.reload();
        }
      }, (err) => {
        window.alert(err.error.message);
      })
  }

  onUploadImage(event: any) {
    this.imageFile = event.target.files[0];
  }
}
