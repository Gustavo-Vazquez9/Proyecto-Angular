import { Component, EventEmitter, Output} from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';
import { Users } from '../Interfaces/user.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  user: string = '';
  password: string = '';
  passwordConfirm: string = '';
  email: string = '';
  error: boolean = false;
  // users: Users[];

  constructor(private service:ServiceService) {
    this.service.obtenerUsusarios().subscribe((respuesta)=>{
        console.log(respuesta);
    });
  }

  ingresarUsuario(){
    const newUser: Users =
    {
      "usuario": this.user,
      "correo": this.email,
      "contraseña": this.password
    }
    if(this.password === this.passwordConfirm)
    {
      this.service.insertarUsusario(newUser).subscribe((respuesta)=>{
        console.log(respuesta)
      });
      this.error = false;
    }else{
      this.error= true;
    }
  }

}
