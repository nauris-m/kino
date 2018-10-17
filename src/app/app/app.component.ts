import {Component} from '@angular/core';

@Component({
  selector: 'my-root',
  template: `
    <nav>
      <!--<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>-->
      <!--<a routerLink="/heroes" routerLinkActive="active">Heroes</a>-->
      <button mat-raised-button color="primary" routerLinkActive="active" routerLink="/movies">Movies</button>
      <button mat-raised-button color="primary" routerLinkActive="active" routerLink="/series">Series</button>
    </nav>
    <!--<my-hero-search></my-hero-search>-->
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
}
