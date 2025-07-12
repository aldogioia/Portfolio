import {Component} from '@angular/core';
import {Project} from '../../model/Project';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  host: {class: 'main'},
})
export class Projects {
  projects: Project[] = [
    new Project("images/museoMultimedialeCosenza.png", "Museo Multimediale Cosenza", "https://museomultimedialecosenza.it", "July 2025"),
    new Project("images/tesi.png", "Bachelor's thesis", "https://github.com/aldogioia/Tesi", "April 2025"),
  ];

  goToExternal(link: string): void {
    window.open(link, '_blank');
  }
}
