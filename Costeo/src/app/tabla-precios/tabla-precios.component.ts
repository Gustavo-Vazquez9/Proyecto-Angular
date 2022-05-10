import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../../interface/Ingrediente';

@Component({
  selector: 'app-tabla-precios',
  templateUrl: './tabla-precios.component.html',
  styleUrls: ['./tabla-precios.component.scss']
})
export class TablaPreciosComponent implements OnInit {
  lista_ingredientes: Ingrediente[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
