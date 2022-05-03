import { Component, EventEmitter, Output} from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';
import { HttpClient } from '@angular/common/http';
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
  // users: Users[];

  constructor(private service:ServiceService) { 
    this.service.obtenerUsusarios().subscribe((respuesta)=>{
        console.log(respuesta);
    });
  }

  ingresarUsuario(){
    console.log(this.user);
    const newUser: Users = {"usuario": this.user, "correo": this.email, "contraseña": this.password }
    this.service.insertarUsusario(newUser).subscribe((respuesta)=>{
      console.log(respuesta)
    });
  }

}
