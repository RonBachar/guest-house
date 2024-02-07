import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  suiteOptions = [
    { value: 'rain-suite', viewValue: 'סוויטת גשם' },
    { value: 'forest-suite', viewValue: 'סוויטת יער' }
  ];
}
