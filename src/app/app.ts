import { Component } from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'Aldo Gioia';

  lottieOptions: AnimationOptions = {
    path: 'lottie_files/coding.json',
    loop: true,
    autoplay: true,
  };
}
