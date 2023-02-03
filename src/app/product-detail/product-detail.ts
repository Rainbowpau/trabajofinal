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
    const products = JSON.parse(window.localStorage.getItem('cart') || '[]');

    this.product.quantity = 1;
    const prod = new Array(this.product);
    const prodsString = JSON.stringify(prod);

    if (products) {
      if (!products?.find((prod:any) => this.product.id === prod.id)) {
        const all = products.concat(this.product)
        const prodString = JSON.stringify(all);
        window.localStorage.setItem('cart', prodString);
      }
    } else {
      window.localStorage.setItem('cart', prodsString);
    }

    this.router.navigateByUrl('/cart')
  }
}
