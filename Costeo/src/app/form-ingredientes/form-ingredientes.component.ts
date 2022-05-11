import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
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
  ingrediente_: Ingrediente = {
    id: 0,
    name: '',
    img: '',
    unity: [],
    price: 0.0,
    weight: 0.0,
    amount: 0,
  };

  ingrediente: String;
  imagen: String = '../../assets/img/fruta.png';
  seleccionUnidad = '';
  disabledButton: boolean = true;
  cantidadInput = '';

  @ViewChild('ingredienteInput') inputIngrediente: ElementRef;
  @ViewChild('cantidadInput') inputCantidad: ElementRef;
  @ViewChild('precioInput') inputPrecio: ElementRef;
  @ViewChild('pesoInput') inputPeso: ElementRef;
  @ViewChild('selecUnidad') selecUnidad: ElementRef;

  @Output() onIngredienteNombre: EventEmitter<string> = new EventEmitter();
  @Output() onCantidadNombre: EventEmitter<number> = new EventEmitter();
  @Output() onUnidadNombre: EventEmitter<string> = new EventEmitter();
  @Output() onPrecioNombre: EventEmitter<number> = new EventEmitter();
  @Output() onTotal: EventEmitter<number> = new EventEmitter();
  // @Output() ingrediente_output = new EventEmitter<Ingrediente>();

  constructor(private service: ApiService) {
    this.service.getIngredientes().subscribe((respuesta) => {
      this.ingredientes = respuesta;
    });
  }

  getIngredienteInput() {
    this.ingrediente = this.inputIngrediente.nativeElement.value;
    let ingredienteMayuscula = this.ingrediente.toUpperCase();

    for (let i = 0; i < this.ingredientes.length; i++) {
      if (ingredienteMayuscula === this.ingredientes[i].name.toUpperCase()) {
        this.inputPeso.nativeElement.value = this.ingredientes[i].weight;
        this.inputPrecio.nativeElement.value = this.ingredientes[i].price;
        this.unidades = this.ingredientes[i].unity;
        this.imagen = this.ingredientes[i].img;

        this.cantidadInput = this.inputCantidad.nativeElement.value;

        this.ingrediente_.id = this.ingredientes[i].id;
        this.ingrediente_.img = this.ingredientes[i].img;
        this.ingrediente_.name = this.ingredientes[i].name;
        this.ingrediente_.price = this.ingredientes[i].price;
        this.ingrediente_.weight = this.ingredientes[i].weight;


        break;
      } else {
        this.disabledButton = true;
      }
    }
  }

  getUnidad() {
    this.seleccionUnidad = this.selecUnidad.nativeElement.value;
    this.ingrediente_.unity = this.selecUnidad.nativeElement.value;

    if (this.seleccionUnidad === 'primera_opcion') {
      console.log("entree");
      this.disabledButton = true;
    } else {
      this.disabledButton = false;

    }
  }

  clickBoton() {
    this.onIngredienteNombre.emit(this.ingrediente_.name);
    this.onCantidadNombre.emit(this.ingrediente_.amount);
    this.onUnidadNombre.emit(this.seleccionUnidad);
    this.onPrecioNombre.emit(this.ingrediente_.price);
    this.onTotal.emit(this.ingrediente_.weight);
  }
}
