import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Output() onPlatillo : EventEmitter<string> = new EventEmitter();
  @Output() onPersonas : EventEmitter<number> = new EventEmitter();
  
  activarPersona : number = 0;
  nombrePlat : string = '';

  constructor() { }

  personas( numero : number ){
    this.activarPersona = numero;
  }

  activar( num : number ) : string {
    return( num === this.activarPersona)
      ? 'activo'
    : 'normal'
  }

  ingresarPlat(){
    this.onPlatillo.emit(this.nombrePlat);
    this.onPersonas.emit(this.activarPersona);
  }
}
