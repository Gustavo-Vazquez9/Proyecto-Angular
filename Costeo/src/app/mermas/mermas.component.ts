import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mermas',
  templateUrl: './mermas.component.html',
  styleUrls: ['./mermas.component.scss']
})
export class MermasComponent implements OnInit {

  parametro : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  paraImprimir(recibeParametro:number){
    this.parametro=recibeParametro;
    console.log(recibeParametro);

  }

}
