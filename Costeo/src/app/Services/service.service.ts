import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../components/Interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { 
    
  }

  obtenerUsusarios():Observable<any>{
    return this.http.get('http://localhost:3000/usuarios');
    
  }

  insertarUsusario(nuevoUsuario: Users):Observable<any>{
    return this.http.post('http://localhost:3000/usuarios', nuevoUsuario);
  }

  verificarUsuario(usuario:string):Observable<any>{
    return this.http.get(`http://localhost:3000/usuarios?usuario=${usuario}`)
  }

  verificarContraseña(contraseña:string):Observable<any>{
    return this.http.get(`http://localhost:3000/usuarios?contraseña=${contraseña}`)
  }

}
