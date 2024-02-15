import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  images = [
    { url: '../../../assets/forest1.jpg'},
    { url: '../../../assets/forest2.jpg' },
    { url: '../../../assets/rain2.jpg' },
    { url: '../../../assets/rain1.jpg' },
    { url: '../../../assets/yard1.jpg'},
    { url: '../../../assets/yard3.jpg' },
    { url: '../../../assets/yard4.jpg' },
    { url: '../../../assets/rain3.jpg' },
    { url: '../../../assets/rain4.jpg' },
    { url: '../../../assets/rain4.jpg' },
  ];
}
