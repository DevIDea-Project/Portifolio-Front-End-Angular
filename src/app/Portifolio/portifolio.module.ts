import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortifolioComponent } from './components';
import { PortifolioService } from './services';
@NgModule({
  declarations: [
    PortifolioComponent
  ],
  exports: [
    PortifolioComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PortifolioService
  ]
})
export class PortifolioModule { }
