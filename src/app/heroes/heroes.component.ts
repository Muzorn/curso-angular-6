import { Component, OnInit } from '@angular/core';
import {Hero} from '../entities/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public hero: Hero;
  public heroes: [Hero];

  constructor() {
    this.hero = new Hero();
    this.hero.id = 1;
    this.hero.name = 'Pepe';
    this.heroes = [this.hero];
    this.heroes.push(new Hero());
  }

  ngOnInit() {
  }

}
