import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product, PRODUCT_DATA } from "../../model/product.model";
import { MatDialog } from '@angular/material/dialog';
import { EditProductModalComponent } from "../edit-product-modal/edit-product-modal.component";
import { AddProductModalComponent } from "../add-product-modal/add-product-modal.component";
import {ProductService} from "../../customer/product/product.service";
import {take} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['productname', 'description', 'price', 'action'];
  dataSources: any;

  constructor(
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.inquiryMerchantProduct()
  }

  inquiryMerchantProduct() {
    this.productService.inquiryProductByUser(localStorage.getItem('userId'))
      .pipe(take(1))
      .subscribe((res) => {
        this.dataSources = res;
      })
  }

  openEditProductModal(product: any): void {
    const dialogRef = this.dialog.open(EditProductModalComponent, {
      width: '400px',
      data: { product }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  deleteProduct(product: any): void {
    this.productService.deleteProduct(product._id)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          window.location.reload();
        }
      });
  }

  addProduct(): void {
    const dialogRef = this.dialog.open(AddProductModalComponent, {
      width: '400px',
      data: { name: '', price: 0, image: '' } as Product
    });

    dialogRef.afterClosed().subscribe((newProduct: Product) => {
      if (newProduct) {
        newProduct.position = Math.floor(Math.random() * 1000) + 1;
        newProduct.image = 'assets/images/santikahotel.jpg';

        this.dataSources = [...this.dataSources, newProduct];
        this.cdr.detectChanges();
      }
    });
  }
}
