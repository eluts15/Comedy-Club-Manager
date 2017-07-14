import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { FinderComponent } from './finder/finder.component';
import { ComedianDetailComponent } from './comedian-detail/comedian-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'finder',
    component: FinderComponent
  },

  {
    path: 'comedians/:id',
    component: ComedianDetailComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
