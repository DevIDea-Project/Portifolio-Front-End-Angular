import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecuperaSenhaComponent } from './components';
import { RecuperaSenhaService } from './services';

@NgModule({
  declarations: [
    RecuperaSenhaComponent
  ],
  exports: [
    RecuperaSenhaComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    RecuperaSenhaService
  ]
})
export class RecuperaSenhaModule { }
