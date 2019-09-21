import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components';
import { HomeRoutingComponent } from './home-routing.component';

export const HomeRoutes: Routes = [
  {
    path: 'home',
    component: HomeRoutingComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(HomeRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class HomeRoutingModule {

}
