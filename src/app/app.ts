import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit, AfterViewInit{
  protected title = 'portfolio';

  lottieOptions: AnimationOptions = {
    path: 'lottie_files/coding.json',
    loop: true,
    autoplay: true,
  };

  initialSize: number = 7;

  constructor(
    private el: ElementRef,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.initialSize = window.innerWidth <= 576 ? 3.8 : 7;
  }

  ngOnInit(): void {
    this.titleService.setTitle('Aldo Gioia – Full Stack Developer | Portfolio');
    this.metaService.addTags([
      { name: 'description', content: 'Hi! I’m Aldo Gioia, a full stack developer passionate about frontend and backend for web, desktop, and mobile applications.' },
      { name: 'keywords', content: 'Aldo Gioia, portfolio, full stack developer, frontend, backend, web developer, mobile apps, desktop software, TypeScript, Angular, Flutter, Java, Computer Science' },
      { name: 'author', content: 'Aldo Gioia' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'en' },

      // Open Graph
      { property: 'og:title', content: 'Aldo Gioia – Full Stack Developer' },
      { property: 'og:description', content: 'Full stack developer for web, mobile, and desktop platforms.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.aldogioia.com' },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Aldo Gioia – Full Stack Developer' },
      { name: 'twitter:description', content: 'Passionate developer across web, mobile, and desktop.' },
    ]);
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
