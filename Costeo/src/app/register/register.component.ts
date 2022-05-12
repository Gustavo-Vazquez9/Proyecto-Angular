import { Component, EventEmitter, Output} from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Users } from '../Interfaces/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{
  user: string = '';
  password: string = '';
  passwordConfirm: string = '';
  email: string = '';
  error: boolean = false;

  constructor(private servicio : UsuariosService) { }

  ingresarUsuario(){
    const newUser: Users =
    {
      "usuario": this.user,
      "correo": this.email,
      "contraseña": this.password
    }
    if(this.password === this.passwordConfirm)
    {
      this.servicio.insertarUsusario(newUser).subscribe((respuesta)=>{
        console.log(respuesta)
      });
      this.error = false;
    }else{
      this.error= true;
    }
  }

}
