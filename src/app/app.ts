//our root app component
import {Component} from '@angular/core'
import {AppHeader} from './pages/app-header'
import {HeroList} from './pages/hero-list'
import {HeroDetail} from './pages/hero-detail'
import {Hero} from "./models/Hero";

@Component({
  selector: 'my-app',
  providers: [],
  template: `
    <div>
      <app-header></app-header>
      
      <hero-list (outputSelectedHero)="onSelected($event.selectedHero)"></hero-list>
      
      <hero-detail [hero]="selectedHero"></hero-detail>
    </div>
  `,
  directives: [AppHeader, HeroList, HeroDetail]
})
export class App {
  selectedHero: Hero;

  constructor() {

  }

  onSelected(hero: Hero){
    console.log(this.selectedHero);
    if(this.selectedHero !== undefined && this.selectedHero == hero){
      this.selectedHero = undefined;
    }else{
      this.selectedHero = hero;
    }
  }
}
