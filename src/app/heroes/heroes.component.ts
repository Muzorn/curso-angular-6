import { Component, OnInit } from '@angular/core';
import {Hero} from '../entities/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // Propiedades/Atributos de la clase del modelo para interactuar con él
  public hero: Hero;
  public heroes: [Hero];

  public heroName;

  constructor() {
    this.hero = new Hero(1, 'Pepe');
    this.heroes = [this.hero];
    this.heroes.push(new Hero(2, 'Paco'));
  }

  ngOnInit() {
  }

  addHeroe() {
    this.heroes.push(new Hero(1, this.heroName));
    // "Limpiamos" el input del formulario
    this.heroName = '';
  }

}
