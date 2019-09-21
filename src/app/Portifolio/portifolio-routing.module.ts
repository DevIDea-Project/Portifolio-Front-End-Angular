import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortifolioComponent } from './components/portifolio.component';
import { PortifolioRoutingComponent } from './components/portifolio.routing.component';

export const PortifolioRoutes: Routes = [
    {
      path: 'portifolio',
      component: PortifolioRoutingComponent,
        children: [
          {
            path: '',
            component: PortifolioComponent
          }
        ]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(PortifolioRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class PortifolioRoutingModule {

}
