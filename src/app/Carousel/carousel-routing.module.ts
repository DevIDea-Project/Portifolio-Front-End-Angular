import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarouselComponent } from './components';
import { CarouselRoutingComponent } from './components/carousel.routing.component';

export const CarouselRoutes: Routes = [
  {
    path: 'carousel',
    component: CarouselRoutingComponent,
    children: [
      {
        path: '',
        component: CarouselComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(CarouselRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class CarouselRoutingModule {

}
