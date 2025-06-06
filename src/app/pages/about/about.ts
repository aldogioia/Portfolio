import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css',
  host: {"class": "main"}
})
export class About implements AfterViewInit{

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
}
