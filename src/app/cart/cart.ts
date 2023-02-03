import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products/products";
import { Router } from '@angular/router';

@Component({
  selector: "cart",
  templateUrl: "./cart.html",
  styleUrls: ["./cart.css"]
})

export class CartComponent implements OnInit {

  products: any = [];
  total: any = this.products.reduce((total: any, current: any) => current.precio * current.quantity + total, 0)

  constructor(public ProductsService: ProductsService, public router: Router) { }

  ngOnInit() {
    this.products = JSON.parse(window.localStorage.getItem('cart') || '[]'); // INITIAL VALUE IS LOCALSTORAGE
    this.total = this.products.reduce((total: any, current: any) => current.precio * current.quantity + total, 0)
  }

  buy() {
    // TODO REDIRECT TO PAYMENT METHOD
  }

  deleteAllProducts() {
    window.localStorage.clear();
    this.products = [];
    this.total = this.products.reduce((total: any, current: any) => current.precio * current.quantity + total, 0)
    window.localStorage.setItem("cart", JSON.stringify(this.products));
  }

  sumProduct(id: any) {
    this.products.map((product: any) => {
      if (product.id === id) {
        product.quantity++;
      }
      return product;
    });
    this.total = this.products.reduce((total: any, current: any) => current.precio * current.quantity + total, 0)
    window.localStorage.setItem("cart", JSON.stringify(this.products));
  }

  substractProduct(id: any) {
    this.products.map((product: any) => {
      if (product.id === id) {
        if (product.quantity === 1) {
          // BORRAR PRODUCT
        } else {
          product.quantity--;
        }
      }
      return product;
    });
    this.total = this.products.reduce((total: any, current: any) => current.precio * current.quantity + total, 0)
    window.localStorage.setItem("cart", JSON.stringify(this.products));
  }
}