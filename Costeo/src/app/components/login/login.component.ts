import { Component, EventEmitter, Output} from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';
import { HttpClient } from '@angular/common/http';

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


  constructor(private service:ServiceService) { }

  ingresarUsuario(){
    console.log(this.user);
  }

}
