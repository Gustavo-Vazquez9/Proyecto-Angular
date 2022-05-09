import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Ingrediente } from '../../interface/Ingrediente';

@Component({
  selector: 'app-form-ingredientes',
  templateUrl: './form-ingredientes.component.html',
  styleUrls: ['./form-ingredientes.component.scss'],
})
export class FormIngredientesComponent {
  ingredientes: Ingrediente[] = [];
  unidades: String[] = [];

  ingrediente: String;
  imagen: String = "../../assets/img/fruta.png";
  seleccionUnidad = "";
  disabledButton: boolean;
  cantidadInput = "";

  @ViewChild('ingredienteInput') inputIngrediente: ElementRef;
  @ViewChild('cantidadInput') inputCantidad: ElementRef;
  @ViewChild('precioInput') inputPrecio: ElementRef;
  @ViewChild('pesoInput') inputPeso: ElementRef;
  @ViewChild('selecUnidad') selecUnidad: ElementRef;


  @Output('ingredienteNombre') ingredienteNombre: String;
  @Output('cantidadPersonas') cantidad: number;
  @Output('unidad') unidad: String;
  @Output('precioNumero') precio: number;
  @Output('pesoNumero') peso: number;


  constructor(private service: ApiService) {
    this.service.getIngredientes().subscribe((respuesta) => {
      this.ingredientes = respuesta;
    });
  }

  getIngredienteInput() {
    this.ingrediente = this.inputIngrediente.nativeElement.value
    console.log(this.ingrediente);
    console.log(this.ingredientes);
    let ingredienteMayuscula = this.ingrediente.toUpperCase();

    for(let i = 0; i < this.ingredientes.length; i++) {

      if (ingredienteMayuscula === this.ingredientes[i].name.toUpperCase()) {
        this.inputPeso.nativeElement.value = this.ingredientes[i].weight;
        this.inputPrecio.nativeElement.value = this.ingredientes[i].price;
        this.unidades = this.ingredientes[i].unity;
        this.imagen = this.ingredientes[i].img;

        this.cantidadInput = this.inputCantidad.nativeElement.value;
        console.log(this.cantidadInput);

        if( this.cantidadInput === "") {
          this.disabledButton = true;
        } else {
          this.disabledButton = false;
        }
        
      } else {
        this.disabledButton = true
      }
    }

  }

  getUnidad() {
  this.seleccionUnidad = this.selecUnidad.nativeElement.value;
  }

  clickBoton() {
    console.log("holaaa");
  }
}
