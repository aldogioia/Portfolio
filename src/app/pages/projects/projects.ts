import {Component, OnInit} from '@angular/core';
import {Project} from '../../model/Project';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  host: {class: 'main'},
})
export class Projects implements OnInit {
  projects: Project[] = [
    new Project("images/museoMultimedialeCosenza.png", "Museo Multimediale Cosenza", "https://museomultimedialecosenza.it", "July 2025"),
    new Project("images/tesi.png", "Bachelor's thesis", "https://github.com/aldogioia/Tesi", "April 2025"),
  ];

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Projects – Aldo Gioia | Developer Portfolio');

    this.metaService.addTags([
      { name: 'description', content: 'Discover the projects by Aldo Gioia: web apps, mobile apps, and desktop software developed with creativity and precision.' },
      { name: 'keywords', content: 'projects, Aldo Gioia, full stack, portfolio, frontend, backend, web apps, mobile apps, open source, TypeScript, Java, Dart, Spring Boot, Angular, Flutter, Computer Science' },
      { name: 'author', content: 'Aldo Gioia' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'en' },
      { name: 'theme-color', content: '#12DF8F' },

      // Open Graph
      { property: 'og:title', content: 'Projects – Aldo Gioia' },
      { property: 'og:description', content: 'A showcase of applications built with Angular, Flutter, Spring Boot, and more.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.aldogioia.com/projects' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Projects – Aldo Gioia' },
      { name: 'twitter:description', content: 'Explore my latest full stack creations – web, mobile, and desktop.' },
    ]);
  }


  goToExternal(link: string): void {
    window.open(link, '_blank');
  }
}
