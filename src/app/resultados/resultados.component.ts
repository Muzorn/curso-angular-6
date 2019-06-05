import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Resultado } from '../entities/resultado';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  public resultados: Resultado[];
  public url = 'https://cursosdedesarrollo.com/pactometro/resultados.json';

  constructor(private httpClient: HttpClient) {
    this.resultados = [];
    this.resultados.push(new Resultado('PP', 66, 'pp-logo.png'));
    this.resultados.push(new Resultado('PSOE', 123, 'psoe-logo.png'));
    this.resultados.push(new Resultado('C`s', 44, 'cs-logo.png'));
    this.resultados.push(new Resultado('PODEMOS', 15, 'podemos-logo.png'));
    this.resultados.push(new Resultado('IU', 5, 'iu-logo.png'));

    this.resultados = this.getResultados();
    
  }
  
  getResultados() {
    return this.httpClient.get<Observable<Resultado[]>>(this.url).toPromise();
  }

  ngOnInit() {
  }

}
