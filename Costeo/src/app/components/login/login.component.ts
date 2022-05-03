import { Component, EventEmitter, Output} from '@angular/core';
import { LoginService } from '../../components/login/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  texto: string = '';
  constructor(private serviseUsuario: LoginService ) {
    this.serviseUsuario.obtenerUsuario()
    .subscribe((respuesta)=>{
        console.log(respuesta);
    });
   }

  ingresarUsuario(){
    console.log(this.texto);
    this.serviseUsuario.insertarUsuario()
    .subscribe((respuesta)=>{
        console.log(respuesta);
    });
  }

}
