import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { IngredienteService } from '../../app/services/ingrediente.service';
import { Ingrediente } from '../Interfaces/ingrediente.interface';
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

  ingrediente: String = '';
  imagen: String = '../../assets/img/fruta.png';
  seleccionUnidad = '';
  disabledButton: boolean = true;
  cantidadInput: number = 0;

  @ViewChild('ingredienteInput')
  inputIngrediente!: ElementRef;
  @ViewChild('cantidadInput')
  inputCantidad!: ElementRef;
  @ViewChild('precioInput')
  inputPrecio!: ElementRef;
  @ViewChild('pesoInput')
  inputPeso!: ElementRef;
  @ViewChild('selecUnidad')
  selecUnidad!: ElementRef;

  @Output() onIngredienteNombre: EventEmitter<string> = new EventEmitter();
  @Output() onCantidadNombre: EventEmitter<number> = new EventEmitter();
  @Output() onUnidadNombre: EventEmitter<string> = new EventEmitter();
  @Output() onPrecioNombre: EventEmitter<number> = new EventEmitter();
  @Output() onTotal: EventEmitter<number> = new EventEmitter();
  @Output() onPesoNombre: EventEmitter<number> = new EventEmitter();

  constructor(private servicio: IngredienteService) {
    this.servicio.getIngredientes().subscribe((respuesta) => {
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
        console.log(this.cantidadInput);

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

    if (
      this.seleccionUnidad === 'primera_opcion' ||
      this.inputCantidad.nativeElement.value === ''
    ) {
      this.disabledButton = true;
    } else {
      this.disabledButton = false;
    }
  }

  validarCantidad() {
    if (
      this.inputIngrediente.nativeElement.value === '' ||
      this.inputCantidad.nativeElement.value === '' ||
      this.inputPrecio.nativeElement.value === '' ||
      this.inputPeso.nativeElement.value === '' ||
      this.seleccionUnidad === ''
    ) {
      this.disabledButton = true;
    } else {
      this.disabledButton = false;
    }

    this.ingrediente_.amount = this.inputCantidad.nativeElement.value;
  }

  clickBoton() {
    this.onIngredienteNombre.emit(this.ingrediente_.name);
    this.onCantidadNombre.emit(this.ingrediente_.amount);
    this.onUnidadNombre.emit(this.seleccionUnidad);
    this.onPrecioNombre.emit(this.ingrediente_.price);

    if (this.seleccionUnidad === 'Pza') {
      this.onTotal.emit(
          this.validarPeso(this.seleccionUnidad)
      );
    } else {
      this.onTotal.emit(
        this.ingrediente_.price *
          this.ingrediente_.amount
      );
    }

    this.onPesoNombre.emit(this.validarPeso(this.seleccionUnidad));

    this.inputIngrediente.nativeElement.value = '';
    this.inputCantidad.nativeElement.value = '';
    this.inputPrecio.nativeElement.value = '';
    this.inputPeso.nativeElement.value = '';
    this.imagen = '../../assets/img/fruta.png';
    this.selecUnidad.nativeElement.value = 'primera_opcion';
    this.unidades = [];
  }

  validarPeso(unidad: string): number {
    let pesoCorrecto = 0.0;

    switch (unidad) {
      case 'kg':
      case 'L':
        pesoCorrecto = this.ingrediente_.amount * this.ingrediente_.price;
        break;
      case 'Pza':
        pesoCorrecto =
          this.ingrediente_.amount *
          this.ingrediente_.weight *
          this.ingrediente_.price;
        break;
      case 'c/s':
        pesoCorrecto = this.ingrediente_.amount * 0.0 * this.ingrediente_.price;
        break;
      case 'G':
      case 'Ml':
        pesoCorrecto =
          (this.ingrediente_.amount * this.ingrediente_.price) / 1000;
        break;
      case 'Tza':
        pesoCorrecto =
          this.ingrediente_.amount * 0.34 * this.ingrediente_.price;
        break;
      case 'Cda':
        break;
      case 'y/c':
      case 'H':
      case 'Rma':
      case 'Pzca':
        pesoCorrecto = this.ingrediente_.amount * 0.5 * this.ingrediente_.price;
        break;
      case 'Dte':
      case 'Cda':
        pesoCorrecto =
          this.ingrediente_.amount * 0.15 * this.ingrediente_.price;
        break;
      case 'Trozo':
        pesoCorrecto = this.ingrediente_.amount * 0.1 * this.ingrediente_.price;
        break;
      case 'Loncha':
        pesoCorrecto = this.ingrediente_.amount * 0.2 * this.ingrediente_.price;
        break;
    }

    return pesoCorrecto;
  }
}
