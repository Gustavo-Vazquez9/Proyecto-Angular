import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FormIngredientesComponent } from './form-ingredientes/form-ingredientes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TablaPreciosComponent } from './tabla-precios/tabla-precios.component';
=======
import { CosteoHeaderComponent } from './costeo/header/costeo-header/costeo-header.component';
>>>>>>> 605ea039b7b28ae777dd3c6574f460191eef9aa6

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FormIngredientesComponent,
    TablaPreciosComponent
=======
    CosteoHeaderComponent
>>>>>>> 605ea039b7b28ae777dd3c6574f460191eef9aa6
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
