import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InputComponent } from './input/input.component';
import { RegisterComponent } from './register/register.component';
import { TablaPreciosComponent } from './tabla-precios/tabla-precios.component';
import { FormIngredientesComponent } from './form-ingredientes/form-ingredientes.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    RegisterComponent,
    TablaPreciosComponent,
    FormIngredientesComponent,
    HeaderComponent,

  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
