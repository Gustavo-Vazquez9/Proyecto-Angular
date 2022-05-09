import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Costeo';

  titulo='Input';

  platillo(plato:string){
    console.log(plato);
  }

  personas(cantidad:number){
    console.log(cantidad);
  }
}
