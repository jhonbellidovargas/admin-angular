import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {
  menuItems: any[] = [];
  constructor(
    private sidebaservice: SidebarService,
  ) {
    this.menuItems = sidebaservice.menu;
  }
}
