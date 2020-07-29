import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-calibracion-usuario',
  templateUrl: './calibracion-usuario.component.html',
  styleUrls: ['./calibracion-usuario.component.css']
})
export class CalibracionUsuarioComponent implements OnInit {

  enviar() {
    // alert("Revisión Guardada");
    // swal("Hello world!");
    swal('Revisión Guardada');
  }

  constructor() { }

  ngOnInit(): void {
  }

}