import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PortifolioModule } from './Portifolio';
import { HomeModule } from './Home';
/*import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from './Carousel';*/

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PortifolioModule,
    HomeModule,
    RouterModule,
    MDBBootstrapModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
