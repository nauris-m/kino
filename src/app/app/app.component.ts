import {Component} from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'my-root',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <span>{{title}} ({{env}}) {{apikey}}</span>
        <span class="example-spacer"></span>
      </mat-toolbar-row>
    </mat-toolbar>
    <br>
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
  title = 'kinema';
  env = environment.envName;
  apikey = environment.API_KEY;
}
