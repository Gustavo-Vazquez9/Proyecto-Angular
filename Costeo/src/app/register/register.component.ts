import { Component, EventEmitter, Output} from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Users } from '../Interfaces/user.interface';
import {interval, timer} from 'rxjs'
import { Router } from '@angular/router';

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
  registrado : boolean = false;
  tiempo : any = timer(5000);
  tiempoError : any = timer(2000);

  constructor(private servicio : UsuariosService, private _router: Router) { }

  ingresarUsuario(){
    const newUser: Users =
    {
      "usuario": this.user,
      "correo": this.email,
      "contraseña": this.password
    }
    if(this.password === this.passwordConfirm)
    {
      /* this.servicio.insertarUsusario(newUser).subscribe((respuesta)=>{
        console.log(respuesta)
      }); */
      this.tiempo.subscribe( () =>
      {
        this.registrado=false;
        this._router.navigate(['/login']);
      });
      this.registrado=true;
      this.error = false;
    }else{
      this.tiempoError.subscribe( () =>
      {
        this.error= false;
      });
      this.error= true;
    }
  }

}
