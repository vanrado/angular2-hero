import { Injectable } from '@angular/core';
import {MOCK_HEROES} from "./mock-heroes";

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(MOCK_HEROES);
  }
}
