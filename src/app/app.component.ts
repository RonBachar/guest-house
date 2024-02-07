import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'guest-house';
  heroImages = [
    {
      imageSrc: '../assets/forest1.jpg',
      imageAlt : 'Hero1'
    },
    {
      imageSrc: '../assets/forest2.jpg',

      imageAlt : 'Hero2'
    },
    {
      imageSrc: '../assets/forest3.jpg',
      imageAlt : 'Hero3'
    },
  ]
}
