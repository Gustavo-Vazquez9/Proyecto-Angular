import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../Interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  url : string = 'http://localhost:3002/usuarios';

  constructor(private http: HttpClient) {

  }

  obtenerUsusarios():Observable<any>{
    return this.http.get(this.url);

  }

  insertarUsusario(nuevoUsuario: Users):Observable<any>{
    return this.http.post(this.url, nuevoUsuario);
  }

  verificarUsuario(usuario:string):Observable<any>{
    return this.http.get(`${this.url}?usuario=${usuario}`)
  }

  verificarContraseña(contraseña:string):Observable<any>{
    return this.http.get(`${this.url}?contraseña=${contraseña}`)
  }
}
