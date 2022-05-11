import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CosteoHeaderComponent } from './costeo/header/costeo-header/costeo-header.component';
=======
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordPipe } from './Pipes/password.pipe';

>>>>>>> 869a7b82eabb076ec36d1aa2b4084fcdea6f60b6

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    CosteoHeaderComponent
=======
    LoginComponent,
    RegisterComponent,
    PasswordPipe
>>>>>>> 869a7b82eabb076ec36d1aa2b4084fcdea6f60b6
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
