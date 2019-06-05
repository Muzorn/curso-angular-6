import {Component, OnInit} from '@angular/core';
import {Resultado} from '../entities/resultado';
import {ResultadosServiceService} from '../resultados-service.service';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  public resultados;

  constructor(private resultadoService: ResultadosServiceService) {
    this.resultados = this.getResultados();
  }

  getResultados() {
    return this.resultadoService.getData().toPromise();
  }

  ngOnInit() {
  }

}
