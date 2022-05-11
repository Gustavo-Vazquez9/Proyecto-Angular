import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormIngredientesComponent } from './form-ingredientes/form-ingredientes.component';
import { TablaPreciosComponent } from './tabla-precios/tabla-precios.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordPipe } from './Pipes/password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormIngredientesComponent,
    TablaPreciosComponent,
    LoginComponent,
    RegisterComponent,
    PasswordPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [FormIngredientesComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
