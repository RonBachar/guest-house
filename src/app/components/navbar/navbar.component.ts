import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  selectedRoom: string;
  rooms = [
    { value: 'rain', view: 'Rain Suite' },
    { value: 'forest', view: 'Forest Suite' }
    // Add more room options as needed
  ];

  onRoomSelect(event: any) {
    const room = event.value;
    // Navigate to the selected room route using Angular Router
  }
}
