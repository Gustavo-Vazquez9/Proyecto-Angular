import { Component} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  user: string = '';
  password: string = '';
  error: boolean = false;

  constructor() {
    
  }

  ingresarUsuario(){
    console.log('hello world');
  }

}
