import { Component} from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';


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

  constructor(private service:ServiceService) {
  }

  validarUsuario()
  {
    this.service.verificarUsuario(this.user).subscribe((data)=>
    {
      if(data[0].contraseña === this.contrasenia)
        {
          console.log(data);
        }else
        {
          this.errorPassword = true;
        }
    });
  }

}
