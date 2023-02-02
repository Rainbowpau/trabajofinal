import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products/products";
import { Router } from '@angular/router';


@Component({
  selector: "cart",
  templateUrl: "./cart.html",
  styleUrls: ["./cart.css"]
})

export class CartComponent implements OnInit {
  
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
  goToProductDetail(){
    this.router.navigateByUrl('/product-detail')
  }
}