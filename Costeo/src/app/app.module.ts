import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormIngredientesModule } from './form-ingredientes/form-ingredientes.module';
import { TablaPreciosModule } from './tabla-precios/tabla-precios.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormIngredientesModule,
    TablaPreciosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
