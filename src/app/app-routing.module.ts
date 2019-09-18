import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortifolioComponent } from './portifolio';



const routes: Routes = [
  { path: 'portifolio', component: PortifolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
