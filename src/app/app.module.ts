import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PortifolioModule } from './portifolio';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PortifolioModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
