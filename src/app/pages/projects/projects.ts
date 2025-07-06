import {AfterViewInit, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  host: {class: 'main'},
})
export class Projects implements AfterViewInit {
  initialSize: number = 6;

  constructor(private el: ElementRef) {}

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
