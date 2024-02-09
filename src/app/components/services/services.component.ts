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
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci!',
      image: '../../../assets/services/bed.png'
    },
    {
      title: 'שירות 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci!',
      image: '../../../assets/services/cleaning.png'
    },
    {
      title: 'שירות 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci!',
      image: '../../../assets/services/kitchen.png'
    },
    {
      title: 'שירות 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci!',
      image: '../../../assets/services/parking.png'
    },
    {
      title: 'שירות 5',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci!',
      image: '../../../assets/services/tub.png'
    },
    {
      title: 'שירות 6',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci!',
      image: '../../../assets/services/wifi.png'
    }
  ];

  constructor() { }
}
