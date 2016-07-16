import {Component} from '@angular/core';
import {Hero} from "./models/Hero";
import {HeroDetail} from "./pages/hero-detail";
import {HeroList} from "./pages/hero-list";
import {AppHeader} from "./pages/app-header";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [AppHeader, HeroList, HeroDetail],
})
export class AppComponent {
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
