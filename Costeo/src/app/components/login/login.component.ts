import { Component} from '@angular/core';


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

  constructor() {
    
  }

  ingresarUsuario(){
    console.log('hello world');
  }

}
