import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map, Observable, take} from "rxjs";
import {ProductOutput, RegisterProductInput, RegisterProductOutput} from "../../model/productDto";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  inquiryAllVerifiedProduct(): Observable<ProductOutput> {
    return this.http
      .get<ProductOutput>(`${environment.url}/api/product`);
  }

  inquiryProductByUser(userId: string|null): Observable<ProductOutput> {
    return this.http
      .get<ProductOutput>(`${environment.url}/api/product?createdBy=${userId}`)
  }

  purchaseProduct(): Observable<any> {
    return this.http
      .post<any>(`${environment.url}/api/product/pay`, '')
      .pipe(map((response: any) => {
        return response;
      }));
  }

  registerNewProduct(payload: RegisterProductInput): Observable<RegisterProductOutput> {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http
      .post<RegisterProductOutput>(`${environment.url}/api/product`, payload, {headers: reqHeader})
      .pipe(map((response: RegisterProductOutput) => {
        return response
      }))
  }

  uploadProductImage(productId: string, imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('images', imageFile);
    return this.http
      .put<any>(`${environment.url}/api/product/upload/${productId}`, formData)
      .pipe(map((response: any) => {
        return response;
      }))
  }

  updateProduct(productId: string, payload: RegisterProductInput): Observable<any>{
    return this.http
      .put<any>(`${environment.url}/api/product/${productId}`, payload)
      .pipe(map((response: any) => {
        return response;
      }))
  }

  deleteProduct(productId: string): Observable<any> {
    return this.http
      .delete<any>(`${environment.url}/api/product/${productId}`)
      .pipe(map((response: any) => {
        return response;
      }))
  }
}
