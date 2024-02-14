import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  images = [
    { url: '../../../assets/forest1.jpg', alt: 'Cinque Terre', description: 'Add a description of the image here' },
    { url: '../../../assets/forest1.jpg', alt: 'Forest', description: 'Add a description of the image here' },
    { url: '../../../assets/forest1.jpg', alt: 'Northern Lights', description: 'Add a description of the image here' },
    { url: '../../../assets/forest1.jpg', alt: 'Mountains', description: 'Add a description of the image here' }
  ];
}
