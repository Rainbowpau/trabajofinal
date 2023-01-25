
import { RouterModule, Route } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Route[] = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
];
export const routing = RouterModule.forRoot(appRoutes);