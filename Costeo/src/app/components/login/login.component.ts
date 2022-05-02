import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  texto: string = '';
  constructor() { }

  ingresarUsuario(){
    console.log(this.texto);
  }

}
