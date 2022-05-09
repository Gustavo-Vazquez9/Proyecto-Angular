import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaPreciosModule } from './tabla-precios/tabla-precios.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TablaPreciosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
