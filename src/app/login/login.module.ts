import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components';
import { LoginService } from './services';
@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
