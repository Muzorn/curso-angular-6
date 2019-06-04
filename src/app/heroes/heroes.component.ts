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

  constructor() {
    this.hero = new Hero(0, '');
    this.heroes = [];
    // this.heroes.push(new Hero(2, 'Paco'));
  }

  ngOnInit() {
  }

  addHeroe() {
    this.heroes.push(new Hero(this.hero.id, this.hero.name));
    // "Limpiamos" el input del formulario
    this.hero = new Hero();
  }

  /**
   * Elimina un héroe.
   * -- No funciona --
   * @param h
   */
  borraHeroe(h: Hero) {
    const posicion = this.heroes.indexOf(h);
    console.log(posicion);
    if (posicion) {
      this.heroes.splice(posicion, 1, h);
    }
  }

}
