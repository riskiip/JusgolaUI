import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RatingProductInput} from "../model/productDto";
import {ProductService} from "../customer/product/product.service";
import {take} from "rxjs";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-review-dialog',
  templateUrl: './review-dialog.component.html',
  styleUrls: ['./review-dialog.component.scss']
})
export class ReviewDialogComponent implements OnInit {
  commentForm: FormGroup;
  reviewText: string = '';
  selectedRating: number = 0;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ReviewDialogComponent>,
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.commentForm = this.fb.group({
      comment: new FormControl(null)
    });
}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onStarClick(rating: number): void {
    this.selectedRating = rating;
  }

  onSubmitReview() {
    let ratingPayload: RatingProductInput = {
      prodId: this.data.data._id,
      star: this.selectedRating,
      comment: this.commentForm.get('comment')?.value
    };
    this.productService.ratingProduct(ratingPayload)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          window.location.reload();
        }
      }, (err) => {
        window.alert(err.error.message);
      })
  }
}
