import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselComponent } from './components';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [CarouselComponent],
  exports: [CarouselComponent],
  bootstrap: [CarouselComponent]
})
export class CarouselModule {}
