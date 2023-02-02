
import { RouterModule, Route } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./product-list/product-list";
import { DetailComponent } from "./product-detail/product-detail";
import { CartComponent } from "./cart/cart";


const appRoutes: Route[] = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "product-list", component: ProductsComponent, pathMatch: "full" },
  { path: "product-detail/:id", component: DetailComponent, pathMatch: "full" },
  { path: "cart", component: CartComponent, pathMatch: "full" },
];
export const routing = RouterModule.forRoot(appRoutes);