import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insumoestimacion',
  templateUrl: './insumoestimacion.component.html',
  styleUrls: ['./insumoestimacion.component.css']
})
export class InsumoestimacionComponent implements OnInit {
  public insumos: any = [];
  insumo = {nombre: '', formato: 'pdf', descripcion: 'describe el proceso'};
  public trabajadores: any = [];
  trabajador = {id: 0, nombre: '', area: ''};

  constructor() { }

  ngOnInit(): void {
  }
  refrescar( array: any) {
    this.insumos.push(array);
    console.log(this.insumos);
  }

}
