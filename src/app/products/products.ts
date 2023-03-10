import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get("/api/products");
  }

  getProduct(id: string) {
    return this.http.get("/api/products/" + id);
  }
}