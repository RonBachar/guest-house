import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  images = [
    {
      url: '../../../assets/forest1.jpg',
      alt: 'forest'
    },
    {
      url: '../../../assets/forest2.jpg',
      alt: 'forest'
    },
    {
      url: '../../../assets/forest3.jpg',
      alt: 'forest'
    },
    {
      url: '../../../assets/forest4.jpg',
      alt: 'forest'
    },
    {
      url: '../../../assets/rain1.jpg',
      alt: 'forest'
    },
    {
      url: '../../../assets/rain2.jpg',
      alt: 'forest'
    },
    {
      url: '../../../assets/rain3.jpg',
      alt: 'forest'
    },
    {
      url: '../../../assets/rain4.jpg',
      alt: 'forest'
    },
    {
      url: '../../../assets/forest4.jpg',
      alt: 'forest'
    },
    {
      url: '../../../assets/forest4.jpg',
      alt: 'forest'
    },
    {
      url: '../../../assets/forest4.jpg',
      alt: 'forest'
    },
  ]
}
