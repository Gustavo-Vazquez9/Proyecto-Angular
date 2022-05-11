import { Component, OnInit } from '@angular/core';
import { Ingrediente} from '../../interface/Ingrediente';
// import { ingre } from '../../interface/Ingrediente';

@Component({
  selector: 'app-tabla-precios',
  templateUrl: './tabla-precios.component.html',
  styleUrls: ['./tabla-precios.component.scss']
})
export class TablaPreciosComponent implements OnInit {
  lista_ingredientes: any[] = []
  //[['Jitomate',3],['Limon',4]]
  ingrediente : string = "";
  cantidad : number = 0;
  unidad : string = "";
  precio : number = 0;
  total : number = 0;



  constructor() {}

  ngOnInit(): void {
  }

  recibirNombre(recibeIngrediente:string){
     this.ingrediente=recibeIngrediente;
    // console.log(this.ingrediente);
  }

  recibirCantidad(recibeCantidad:number){
    this.cantidad=recibeCantidad;

    // console.log(recibeCantidad)
    // console.log(this.ingrediente);
  }

  recibirUnidad(recibeUnidad:string){
    this.unidad=recibeUnidad;

  }

  recibirPrecio(recibePrecio:number){
    this.precio=recibePrecio;

  }

  esTotal(recibeTotal:number){
    this.total=recibeTotal;
    this.lista_ingredientes.push([this.ingrediente,this.cantidad,this.unidad,this.precio,this.total]);
  }

}
