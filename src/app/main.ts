//main entry point
import {bootstrap} from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import {App} from './app';

bootstrap(App, [])
  .catch(err => console.error(err));
