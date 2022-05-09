import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient){}

  obtenerUsuario() : Observable <any> {
    return this.http.get('http://localhost:3000/usuarios');
  }

  insertarUsuario(): Observable <any> {
    return this.http.post('http://localhost:3000/usuarios',
    {
      "usuario": "wisin",
      "correo": "wy@gmail.com",
      "contraseña": "abc123"
    }
    );
  }
}
