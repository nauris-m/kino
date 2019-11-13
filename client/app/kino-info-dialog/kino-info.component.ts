import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef, MessageService} from 'primeng/api';

@Component({
  selector: 'app-kino-info',
  templateUrl: './kino-info.component.html',
  styleUrls: ['./kino-info.component.scss']
})
export class KinoInfoComponent implements OnInit {

  allFeatures: Array<any>;
  customFeatures: Array<any>;
  theMovie;

  constructor(public ref: DynamicDialogRef,
              public config: DynamicDialogConfig,
              private messageService: MessageService) {
    this.allFeatures = [];
    this.customFeatures = [];
  }

  ngOnInit() {
    console.log(this.config.data.movie);
    this.theMovie = this.config.data.movie;
  }
}
