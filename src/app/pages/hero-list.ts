//our root app component
import {Component, EventEmitter, Output} from '@angular/core'
import {Hero} from "../models/Hero";

@Component({
  selector: 'hero-list',
  providers: [],
  styleUrls:['app/pages/hero-list.css'],
  templateUrl: 'app/pages/hero-list.html',
  directives: []
})
export class HeroList {
  heroes : Hero[];
  @Output() outputSelectedHero = new EventEmitter();
  private title;

  constructor() {
    this.title = 'Angular2 (Release Candidate!)';
    this.heroes = [
      new Hero(1, "Janko"),
      new Hero(2, "Janko2"),
      new Hero(3, "Janko3"),
      new Hero(4, "Janko4"),
      new Hero(5, "Janko5"),
      new Hero(6, "Janko6"),
      new Hero(7, "Janko7"),
    ];
  }

  onSelect(hero: Hero){
    this.outputSelectedHero.emit({selectedHero: hero});
  }
}
