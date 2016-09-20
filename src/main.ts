import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';

// Import configured routes
import { APP_ROUTER_PROVIDERS } from './app/app.routing';

if (environment.production) {
  enableProdMode();
}

// Bootstrap app with configured routes
bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS, HTTP_PROVIDERS
])
.catch(err => console.error(err));
