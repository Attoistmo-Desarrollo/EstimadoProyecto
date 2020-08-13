import { Component, OnInit } from '@angular/core';
import {EstimacionService} from './shared/estimacion.service';
import { Estimacion } from './shared/estimacion';
import { Addtrabajador } from '../addtrabajador/shared/addtrabajador';
import { Addinsumo } from '../addinsumo/shared/Addinsumo';

@Component({
  selector: 'app-insumoestimacion',
  templateUrl: './insumoestimacion.component.html',
  styleUrls: ['./insumoestimacion.component.css']
})
export class InsumoestimacionComponent implements OnInit {
  public insumos: Addinsumo = new Addinsumo();
  insumo: any = [];
  public trabajadores: Addtrabajador = new Addtrabajador();
  trabajador: any = [];
  public estimacion: Estimacion = new Estimacion();
  idestimado: any = [];
  validandoInsumo = false;
  validandoTrabajador = false;
  validandoestimacion = false;
  constructor(private service: EstimacionService) { }

  ngOnInit(): void {
  }
  refrescar( array: any) {
    this.trabajadores = array;
    this.trabajador.push(array);
    console.log(this.trabajadores);
  }
  refrescarinsumo( array: any) {
    this.insumos = array;
    this.insumo.push(array);
    console.log(this.insumos);
  }
  agregar() {
    this.estimacion.nombre = 'prueba3';
    this.estimacion.Fecha = '2020-08-07';
    this.service.create(this.estimacion).subscribe((data: {}) => {
      this.idestimado = data;
      console.log(this.idestimado);
      this.validandoestimacion = true;
    });
    setTimeout(() => {
      if (this.idestimado.id !== 0) {
        this.agregarInsumo();
        this.agregarTrabajador();
      }
      this.direccionamiento();
    }, 500);
  }
  agregarInsumo() {
    this.insumos.id_estimador = this.idestimado.id;
    this.service.crearInsumo(this.insumos).subscribe((data: {}) => { console.log(data); this.validandoInsumo = true; });
  }
  agregarTrabajador() {
    this.trabajadores.id_estimador = this.idestimado.id;
    this.service.crearTrabajador(this.trabajadores).subscribe((data: {}) => {console.log(data); this.validandoTrabajador = true; });
  }
  direccionamiento() {
    if (this.validandoestimacion) {
      alert('( ' + this.validandoestimacion + ' validacion estimacion ) \n' +
      '( ' + this.validandoInsumo + ' insumo) \n' + '( ' + this.validandoTrabajador + ' insumo)');
    } else {
      alert('no se logro agregar los datos');
    }
  }

}
