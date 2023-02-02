import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products/products";
import { Router } from '@angular/router';


@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.html",
  styleUrls: ["./product-detail.css"]
})

export class DetailComponent implements OnInit {
  
  product: any= {};
  path: string = '../../';

  constructor(public ProductsService: ProductsService, public router:Router) {}

  ngOnInit() {
    this.getProduct()
  }

  getProduct() {
    const id = this.router.url.split('/product-detail/')[1];
    console.log(id);
    this.ProductsService.getProduct(id).subscribe(data => {
      this.product = data
    });
  }

  goToCart(){
    this.router.navigateByUrl('/cart')
  }
}
