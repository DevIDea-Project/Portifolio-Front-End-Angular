import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components';
import { HomeService } from './services';
import { HomeRoutingModule } from './home-routing.module';
import { HomeRoutingComponent } from './home-routing.component';
//import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    HomeComponent,
    HomeRoutingComponent
  ],
  exports: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
