import {Component} from '@angular/core';
import {Hero} from "../models/Hero";
import {HeroDetail} from "./hero-detail";
import {HeroList} from "./hero-list";

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['../app.component.css'],
  directives: [HeroList, HeroDetail],
})
export class HeroesComponent {
  selectedHero:Hero;

  constructor() {
  }

  onSelected(hero:Hero) {
    console.log(this.selectedHero);
    if (this.selectedHero !== undefined && this.selectedHero == hero) {
      this.selectedHero = undefined;
    } else {
      this.selectedHero = hero;
    }
  }
}
