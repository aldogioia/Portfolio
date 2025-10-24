import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {About} from './pages/about/about';
import {Projects} from './pages/projects/projects';

const routes: Routes = [
  {path: '', redirectTo: '/projects', pathMatch: 'full'},
  { path: 'about',  component: About },
  { path: 'projects',  component: Projects },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
