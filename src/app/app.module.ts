import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login';
/*import { HomeComponent } from './components/home/home.component';
import { RecuperaSenhaComponent } from './recuperaSenha/recupera-senha/recupera-senha.component';*/
@NgModule({
  declarations: [
    AppComponent,
    /*HomeComponent,
    /RecuperaSenhaComponent,*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
    /*PortifolioComponent*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
