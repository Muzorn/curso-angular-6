import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public textCadena: string;
  public listadoCadenas: string[];

  constructor() {
    this.listadoCadenas = ['Cadena 1', 'Cadena 2', 'Cadena 3'];
  }

  ngOnInit() {
  }

  addCadena() {
    this.listadoCadenas.push(this.textCadena);
    this.textCadena = '';
  }
}
