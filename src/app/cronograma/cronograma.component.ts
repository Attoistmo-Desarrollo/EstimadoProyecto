
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.css']
})
export class CronogramaComponent implements OnInit {

  constructor() { }
  cronograma = [
    {
      id: 1,
      actividad: '5w',
      Asignado: 'Aldrid Jesus M',
      cantidad: 3,
      tiempo: '10 min',
      tiempo_real: '11 min',
      estado: 'en curso',
      Fecha_entrega: '10-02-2020'
    },
    {
      id: 2,
      actividad: '5w',
      Asignado: 'Jesus M',
      cantidad: 2,
      tiempo: '12 min',
      tiempo_real: '11 min',
      estado: 'en curso',
      Fecha_entrega: '11-02-2020'
    },
    {
      id: 3,
      actividad: '5w',
      Asignado: 'Aldrid Martinez',
      cantidad: 10,
      tiempo: '15 min',
      tiempo_real: '15 min',
      estado: 'en curso',
      Fecha_entrega: '12-02-2020'
    },
    {
      id: 4,
      actividad: '5p',
      Asignado: 'Genaro Cruz Argueta',
      cantidad: 11,
      tiempo: '15 min',
      tiempo_real: '15 min',
      estado: 'en curso',
      Fecha_entrega: '12-02-2019'
    },
    {
      id: 5,
      actividad: 'Como como',
      Asignado: 'Abraham Rodriguez N',
      cantidad: 10,
      tiempo: '15 min',
      tiempo_real: '18 min',
      estado: 'Resuelta',
      Fecha_entrega: '12-04-2020'
    },
    {
      id: 6,
      actividad: 'Como Como',
      Asignado: 'Carlos Sandoval',
      cantidad: 2,
      tiempo: '15 min',
      tiempo_real: '45 min',
      estado: 'Cerrada',
      Fecha_entrega: '12-02-2020'
    },
    {
      id: 7,
      actividad: 'Desarrollo CRUD',
      Asignado: 'Eduardo Lopez',
      cantidad: 1,
      tiempo: '245 min',
      tiempo_real: '240 min',
      estado: 'Resuelta',
      Fecha_entrega: '12-03-2020'
    },
    {
      id: 8,
      actividad: 'Prueba de Servicios REST',
      Asignado: 'Samuel Gonzalez',
      cantidad: 10,
      tiempo: '15 min',
      tiempo_real: '15 min',
      estado: 'cerrada',
      Fecha_entrega: '12-02-2020'
    },
    {
      id: 9,
      actividad: 'Desarrollo CRUD',
      Asignado: 'Eduardo Lopez',
      cantidad: 1,
      tiempo: '245 min',
      tiempo_real: '240 min',
      estado: 'Resuelta',
      Fecha_entrega: '12-03-2020'
    },
    {
      id: 10,
      actividad: 'Prueba de Servicios REST',
      Asignado: 'Samuel Gonzalez',
      cantidad: 10,
      tiempo: '15 min',
      tiempo_real: '15 min',
      estado: 'cerrada',
      Fecha_entrega: '12-02-2020'
    },
    {
      id: 11,
      actividad: 'Desarrollo CRUD',
      Asignado: 'Eduardo Lopez',
      cantidad: 1,
      tiempo: '245 min',
      tiempo_real: '240 min',
      estado: 'Resuelta',
      Fecha_entrega: '12-03-2020'
    },
    {
      id: 12,
      actividad: 'Prueba de Servicios REST',
      Asignado: 'Samuel Gonzalez',
      cantidad: 10,
      tiempo: '15 min',
      tiempo_real: '15 min',
      estado: 'cerrada',
      Fecha_entrega: '12-02-2020'
    }
  ];

  ngOnInit(): void {
  }

}