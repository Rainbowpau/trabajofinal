import { routing } from "./app-routing.module";
import { RouterModule } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, HomeComponent],
  imports: [RouterModule, BrowserModule, FormsModule, HttpClientModule, routing, BrowserAnimationsModule, MatSlideToggleModule],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
