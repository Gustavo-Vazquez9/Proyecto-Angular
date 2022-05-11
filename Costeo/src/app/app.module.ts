import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormIngredientesComponent } from './form-ingredientes/form-ingredientes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TablaPreciosComponent } from './tabla-precios/tabla-precios.component';

@NgModule({
  declarations: [
    AppComponent,
    FormIngredientesComponent,
    TablaPreciosComponent
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
