import { Component, OnInit } from '@angular/core';
import { Cliente } from '../entities/cliente';

@Component({
  selector: 'app-misclientes',
  templateUrl: './misclientes.component.html',
  styleUrls: ['./misclientes.component.css']
})
export class MisclientesComponent implements OnInit {

  // public clientes: [Cliente];
  public clientes: Cliente[];

  constructor() {
    // this.clientes = new Array<Cliente>();
    this.clientes = [];
    this.clientes.push(new Cliente('Cliente 1', 'Calle Falsa 123'));
    this.clientes.push(new Cliente('Cliente 2', 'Calle Falsa 111'));
    this.clientes.push(new Cliente('Cliente 3', 'Calle Falsa 321'));
  }

  ngOnInit() {
  }

}
