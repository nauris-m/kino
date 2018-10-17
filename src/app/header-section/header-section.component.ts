import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'my-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent implements OnInit {

  title: string;
  env: string;
  apikey: string;

  constructor() {
    this.title = 'kinema';
    this.env = environment.envName;
    this.apikey = environment.API_KEY;
  }

  ngOnInit() {
  }

}
