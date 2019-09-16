import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroComponent } from './components';
import { CadastroService } from './services';

@NgModule({
  declarations: [
    CadastroComponent
  ],
  exports: [
    CadastroComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CadastroService
  ]
})
export class CadastroModule { }
