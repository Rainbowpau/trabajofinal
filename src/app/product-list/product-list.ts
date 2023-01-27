import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products/products";
import { Router } from '@angular/router';


@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.html",
  styleUrls: ["./product-list.css"]
})

export class ProductsComponent implements OnInit {
  
  products: any= [];
  path: string = '../../';

  constructor(public ProductsService: ProductsService, public router:Router) {}

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.ProductsService.getProducts ().subscribe(data => {
      console.log(data);
      this.products = data
    });
  }
}