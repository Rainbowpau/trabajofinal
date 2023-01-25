
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsersService } from "../users/users.service";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  constructor(public userService: UsersService, public router: Router) {}

  goToLogin() {
    this.router.navigateByUrl('/login');
  }
  goToRegister() {
    this.router.navigateByUrl('/register');
  }
}