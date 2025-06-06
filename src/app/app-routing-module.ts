import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {About} from './pages/about/about';
import {Portfolio} from './pages/portfolio/portfolio';

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  { path: 'about',  component: About },
  { path: 'portfolio',  component: Portfolio },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
