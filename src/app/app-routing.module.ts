import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

import { DsahboardComponent } from './dsahboard/dsahboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent},
  { path: 'dsahboard', component: DsahboardComponent},
  {path: '', redirectTo: '/dsahboard', pathMatch: 'full'},
  { path: 'detail/:id', component: HeroDetailComponent }
];
@NgModule({

  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes,{enableTracing: true}) ]
})

export class AppRoutingModule { }
