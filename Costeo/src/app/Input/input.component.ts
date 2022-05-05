import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  nombrePlat : string = '';

  constructor() { }

  personas(numero:Number){
    console.log(numero);
  }

  ingresarPlat(){
    console.log(this.nombrePlat);
  }

}
