import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'entrega-angular';
  user: any = null;
  constructor(public userService: UsersService, public router: Router) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    console.log(this.user);
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }
  goToRegister() {
    this.router.navigateByUrl('/register');
  }
}
