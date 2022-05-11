import { Injectable } from '@angular/core';
import { Ingrediente } from '../interface/Ingrediente';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "http://localhost:3000/ingredientes";

  constructor(private http: HttpClient) { }

  public getIngredientes(): Observable<any> {
    return this.http.get<Ingrediente>(this.url);
  }
}
