import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  user: string = '';
  contrasenia: string = '';


  errorUser: boolean = false;
  errorPassword: boolean = false;
  isActive: boolean = false;

  constructor(private servicio : UsuariosService, private _router: Router) { }

  validarUsuario()
  {
    this.servicio.verificarUsuario(this.user).subscribe((data)=>
    {
      if(data[0].contraseña === this.contrasenia)
        {
          console.log(data);
          this._router.navigate(['/costeo']);
        }else
        {
          this.errorPassword = true;
        }
    });
  }

}
