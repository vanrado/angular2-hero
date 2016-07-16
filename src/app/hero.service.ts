import {Injectable} from '@angular/core';
import {MOCK_HEROES} from "./mock-heroes";
import {Hero} from "./models/Hero";

@Injectable()
export class HeroService {
  getHeroes() {
    // return Promise.resolve(MOCK_HEROES);
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(MOCK_HEROES), 2000)
    );
  }
}
