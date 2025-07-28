import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css',
  host: {"class": "main"}
})
export class About implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('About – Aldo Gioia | Full Stack Developer');

    this.metaService.addTags([
      { name: 'description', content: 'Learn more about Aldo Gioia – a passionate full stack developer with a degree in Computer Science. I love building apps for web, mobile, and desktop.' },
      { name: 'keywords', content: 'about Aldo Gioia, full stack developer, software engineer, web development, mobile development, Angular, Flutter, Java, Computer Science' },
      { name: 'author', content: 'Aldo Gioia' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'en' },
      { name: 'theme-color', content: '#12DF8F' },

      // Open Graph
      { property: 'og:title', content: 'About – Aldo Gioia' },
      { property: 'og:description', content: 'Full stack developer passionate about software and clean code.' },
      { property: 'og:type', content: 'profile' },
      { property: 'og:url', content: 'https://www.aldogioia.com/about' },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'About – Aldo Gioia' },
      { name: 'twitter:description', content: 'Developer profile – code lover, app builder, coffee drinker.' },
    ]);
  }
}
