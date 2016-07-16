//our root app component
import {Component} from '@angular/core'

@Component({
  selector: 'app-header',
  providers: [],
  templateUrl: 'app/pages/app-header.html',
  directives: []
})
export class AppHeader {
  title : string;
  
  constructor() {
    this.title = 'Angular2 (Release Candidate!)';
  }
}