import { Component, EventEmitter, Output} from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';
import { Users } from '../Interfaces/user.interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: string = '';
  password: string = '';
  passwordConfirm: string = '';
  email: string = '';
  
  error: boolean = false;

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
