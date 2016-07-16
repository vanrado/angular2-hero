//our root app component
import {Component, EventEmitter, Output, OnInit} from '@angular/core'
import {Hero} from "../models/Hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'hero-list',
  styleUrls: ['app/pages/hero-list.css'],
  templateUrl: 'app/pages/hero-list.html',
  directives: [],
  providers: [HeroService]
})
export class HeroList implements OnInit {
  ngOnInit():any {
    // this.heroService.getHeroes().then(function (heroes) {
    //   this.heroes = heroes;
    // });
    // Arrow function
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  heroes:Hero[];
  @Output() outputSelectedHero = new EventEmitter();
  private title;

  constructor(private heroService:HeroService) {
    this.title = 'Angular2 (Release Candidate!)';
  }

  onSelect(hero:Hero) {
    this.outputSelectedHero.emit({selectedHero: hero});
  }
}
