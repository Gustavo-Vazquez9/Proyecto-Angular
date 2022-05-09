import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  activarPersona : number = 0;
  nombrePlat : string = '';

  constructor() { }

  personas( numero : number ){
    this.activarPersona = numero;
    console.log(numero);
  }

  activar( num : number ) : string {
    return( num === this.activarPersona)
      ? 'activo'
    : 'content-box'
  }

  ingresarPlat(){
    console.log(this.nombrePlat);
  }

}
