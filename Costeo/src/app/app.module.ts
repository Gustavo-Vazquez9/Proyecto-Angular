import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> alos
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
