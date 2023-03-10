
import { Component } from "@angular/core";
import { UsersService } from "../users/users.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(public userService: UsersService, public router: Router) {}

  login() {
    const user = { email: this.email, password: this.password };
    this.userService.login(user).subscribe(data => {
      console.log(data);
      this.userService.setUser(data.nombre);
      this.router.navigateByUrl('/');
    });
  }
}