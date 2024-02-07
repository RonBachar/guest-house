import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      title: 'שירות 1',
      description: 'תיאור שירות 1',
      image: '../../../assets/services/bed.png'
    },
    {
      title: 'שירות 2',
      description: 'תיאור שירות 2',
      image: '../../../assets/services/cleaning.png'
    },
    {
      title: 'שירות 3',
      description: 'תיאור שירות 3',
      image: '../../../assets/services/kitchen.png'
    },
    {
      title: 'שירות 4',
      description: 'תיאור שירות 4',
      image: '../../../assets/services/parking.png'
    },
    {
      title: 'שירות 5',
      description: 'תיאור שירות 5',
      image: '../../../assets/services/tub.png'
    },
    {
      title: 'שירות 6',
      description: 'תיאור שירות 6',
      image: '../../../assets/services/wifi.png'
    }
  ];

  constructor() { }
}
