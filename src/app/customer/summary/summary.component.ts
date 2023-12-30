import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../product/product.service";
import {CartInput, PurchaseProductInput} from "../../model/productDto";
import {take} from "rxjs";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {
  showPage = false;

  constructor(private router: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.addProductToCart();
  }

  addProductToCart() {
    let cartPayload: CartInput = {
      cart: [
        {
          _id: localStorage.getItem('productId'),
          count: 1
        }
      ]
    };
    this.productService.addToCart(cartPayload)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.purchaseProduct();
        }
      })
  }

  purchaseProduct() {
    let purchasePayload: PurchaseProductInput = {
      transactionMethod: 'paypal'
    };

    this.productService.purchaseProduct(purchasePayload)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.showPage = true;
          localStorage.removeItem('productId');
        }
      })
  }

  backToHome() {
    this.router.navigate(['/jusgola/home']);
  }

  ngOnDestroy() {
    localStorage.removeItem('productId');
  }
}
