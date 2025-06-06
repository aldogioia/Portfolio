import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { About } from './pages/about/about';
import { Portfolio } from './pages/portfolio/portfolio';
import { Navbar } from './components/navbar/navbar';

import {LottieComponent, provideLottieOptions} from 'ngx-lottie';
import {Links} from './components/links/links';

@NgModule({
  declarations: [
    App,
    About,
    Portfolio,
    Navbar,
    Links,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieComponent
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
  ],
  bootstrap: [App]
})
export class AppModule { }
