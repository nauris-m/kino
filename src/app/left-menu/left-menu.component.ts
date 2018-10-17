import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'my-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  items: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-plus'},
      {label: 'Favorites', icon: 'pi pi-fw pi-download'},
      {label: 'Settings', icon: 'pi pi-fw pi-refresh'}
    ];
  }

}
