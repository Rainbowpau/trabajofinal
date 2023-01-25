import { Component } from "@angular/core";
import { UsersService } from "../users/users.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  email: string;
  password: string;
  passwordError: boolean;
  confirmPassword: string;

  constructor(public userService: UsersService, public router:Router) {}

  register() {
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe(data => {
      console.log(data);
      this.userService.setUser(data.nombre);
      this.router.navigateByUrl('/');
    });
  }
}