import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {environment} from "./app/environment";
import {AppComponent} from "./app/app.component";
import {appRouterProviders} from "./app/pages/app.routes";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,[
  disableDeprecatedForms(),
  provideForms(),
  appRouterProviders
]);

