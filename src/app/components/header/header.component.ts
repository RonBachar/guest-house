import { Component, inject } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
 
})
export class HeaderComponent {
  isResponsive: boolean = false;

  toggleResponsive(): void {
    this.isResponsive = !this.isResponsive;
  }
}
