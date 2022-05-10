import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { TablaPreciosModule } from './tabla-precios/tabla-precios.module';
=======

>>>>>>> develop

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    TablaPreciosModule
=======
    AppRoutingModule
>>>>>>> develop
  ],
  exports: [
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
