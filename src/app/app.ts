import {Component, ElementRef} from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio';

  lottieOptions: AnimationOptions = {
    path: 'lottie_files/coding.json',
    loop: true,
    autoplay: true,
  };

  initialSize: number = 7;

  constructor(private el: ElementRef) {
    this.initialSize = window.innerWidth <= 576 ? 3.8 : 7;
  }

  ngAfterViewInit(): void {
    const h1 = this.el.nativeElement.querySelector('h1');
    const minSize = 2.5;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const maxScroll = 150;
      const clampedScroll = Math.min(scrollY, maxScroll);
      const scale = 1 - (clampedScroll / maxScroll);
      const fontSize = minSize + (this.initialSize - minSize) * scale;

      h1.style.fontSize = `${fontSize}rem`;
    });
  }
}
