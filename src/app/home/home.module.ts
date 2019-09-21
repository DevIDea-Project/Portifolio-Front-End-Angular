import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components';
import { HomeService } from './services';
import { HomeRoutingModule } from './home-routing.module';
import { HomeRoutingComponent } from './home-routing.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeRoutingComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
