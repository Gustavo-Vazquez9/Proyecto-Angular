import { Injectable } from '@angular/core';
import { Ingrediente } from '../Interfaces/ingrediente.interface';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {


  private url = "http://localhost:3001/ingredientes";

  constructor(private http: HttpClient) { }

  public getIngredientes(): Observable<any> {
    return this.http.get<Ingrediente>(this.url);
  }
}
