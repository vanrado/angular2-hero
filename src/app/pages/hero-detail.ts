//our root app component
import {Component, Input} from '@angular/core'
import {
  REACTIVE_FORM_DIRECTIVES,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {Hero} from "../models/Hero";

@Component({
  selector: 'hero-detail',
  providers: [],
  templateUrl: 'app/pages/hero-detail.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class HeroDetail {
  @Input()
  hero:Hero;
  detailForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor() {
    console.log("const called");
  }

  onSubmit(value:string) {
    console.log("submited value is " + value);
    this.hero.name = value;
  }
}
