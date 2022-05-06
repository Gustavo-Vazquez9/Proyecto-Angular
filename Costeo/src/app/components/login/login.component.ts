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
  error: boolean = false;
  isActive: boolean = false;

  constructor(private service:ServiceService) {
  }

  validarUsuario(){
    this.service.verificarUsuario(this.user).subscribe((data)=>{
      console.log(data);
    })
  }

}
