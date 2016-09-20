import { provideRouter, RouterConfig } from '@angular/router';
import { BrewdayComponent } from './brewday/brewday.component';
import { StartupComponent } from './startup.component';

export const routes: RouterConfig = [
    { path: '', component: StartupComponent },
    { path: 'brewday', component: BrewdayComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];