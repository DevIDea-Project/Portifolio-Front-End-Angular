import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortifolioComponent } from './components';
import { PortifolioService } from './services';
import { PortifolioRoutingModule } from './portifolio-routing.module';
import { PortifolioRoutingComponent } from './components/portifolio.routing.component';

@NgModule({
  declarations: [
    PortifolioComponent,
    PortifolioRoutingComponent

  ],
  exports: [
    PortifolioComponent
  ],
  imports: [
    CommonModule,
    PortifolioRoutingModule
  ],
  providers: [
    PortifolioService
  ]
})
export class PortifolioModule { }
