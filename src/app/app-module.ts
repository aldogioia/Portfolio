import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { About } from './pages/about/about';

import {LottieComponent, provideLottieOptions} from 'ngx-lottie';
import { Projects } from './pages/projects/projects';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    App,
    About,
    Projects,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LottieComponent,
        NgOptimizedImage
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
