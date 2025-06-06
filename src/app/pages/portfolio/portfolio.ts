import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
  host: {"class": "main"}
})
export class Portfolio implements AfterViewInit{

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const paragraphs = this.el.nativeElement.querySelectorAll('.text p');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          // Optional: stop observing after first reveal
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.8,
    });

    paragraphs.forEach((p: HTMLElement) => observer.observe(p));
  }

  lottieOptions: AnimationOptions = {
    path: 'lottie_files/no_projects.json',
    loop: true,
    autoplay: true,
  };
}
