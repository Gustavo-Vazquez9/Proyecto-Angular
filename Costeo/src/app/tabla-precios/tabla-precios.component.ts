import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingrediente} from '../../app/Interfaces/ingrediente.interface';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-tabla-precios',
  templateUrl: './tabla-precios.component.html',
  styleUrls: ['./tabla-precios.component.scss']
})
export class TablaPreciosComponent{
  lista_ingredientes: any[] = []
  //[['Jitomate',3],['Limon',4]]
  ingrediente : string = "";
  cantidad : number = 0;
  unidad : string = "";
  precio : number = 0;
  total : number = 0;
  peso: number = 0;
  acumulador: number = 0;

  nombrePlat : string = '';

  constructor() { }

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

 recibirPeso(peso:number) {
   this.peso = peso;
  //  console.log(this.peso);
 }
 esTotal(recibeTotal:number){
  this.total=recibeTotal;
  this.lista_ingredientes.push([this.ingrediente,this.cantidad,this.unidad,this.precio,this.total]);
  this.acumulador=0;
  for (let i =0; i<this.lista_ingredientes.length; i++) {
    this.acumulador += this.lista_ingredientes[i][4];
  }
  // console.log(this.acumulador)
}

platillo(plato:string){
  this.nombrePlat=plato;
}

finalizar(){
  console.log(this.nombrePlat);
}

}
