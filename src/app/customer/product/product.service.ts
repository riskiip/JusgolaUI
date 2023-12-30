import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map, Observable} from "rxjs";
import {
  CartInput,
  ProductOutput,
  PurchaseProductInput,
  RatingProductInput,
  RegisterProductInput,
  RegisterProductOutput
} from "../../model/productDto";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  inquiryAllVerifiedProduct(): Observable<ProductOutput> {
    return this.http
      .get<ProductOutput>(`${environment.url}/api/product?ministry_status=true`);
  }

  inquiryNotVerifiedProduct(): Observable<ProductOutput> {
    return this.http
      .get<ProductOutput>(`${environment.url}/api/product?ministry_status=false`);
  }

  inquiryProductByUser(userId: string | null): Observable<ProductOutput> {
    return this.http
      .get<ProductOutput>(`${environment.url}/api/product?createdBy=${userId}`)
  }

  purchaseProductOnline(): Observable<any> {
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

  updateProduct(productId: string, payload: RegisterProductInput): Observable<any> {
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

  ratingProduct(payload: RatingProductInput): Observable<any> {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http
      .put<any>(`${environment.url}/api/product/rating`, payload, {headers: reqHeader})
      .pipe(map((response: any) => {
        return response;
      }))
  }

  addToCart(payload: CartInput): Observable<any> {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http
      .post<any>(`${environment.url}/api/user/cart`, payload, {headers: reqHeader})
      .pipe(map((response: any) => {
        return response;
      }))
  }

  purchaseProduct(payload: PurchaseProductInput): Observable<any> {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http
      .post<any>(`${environment.url}/api/user/cart/cash-order`, payload, {headers: reqHeader})
      .pipe(map((response: any) => {
        return response;
      }))
  }

  inquiryProductDetail(productId: string | null): Observable<any> {
    return this.http
      .get<Observable<any>>(`${environment.url}/api/product/detail/${productId}`)
      .pipe(map((response: any) => {
        return response
      }));
  }

  inquiryProductByUserAndMinistry(userId: string | null): Observable<ProductOutput> {
    return this.http
      .get<ProductOutput>(`${environment.url}/api/product?ministry_status=true&createdBy=${userId}`)
  }
}
