import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login';
import { HomeModule } from './home';
import { RecuperaSenhaModule } from './recupera-senha';
import { CadastroModule } from './cadastro';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
    RecuperaSenhaModule,
    CadastroModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
