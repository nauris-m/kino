import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef, MessageService} from 'primeng/api';
import {SeriesService} from '../services/series.service';
import * as moment from 'moment';


@Component({
  selector: 'app-kino-info',
  templateUrl: './kino-seasons.component.html',
  styleUrls: ['./kino-seasons.component.scss']
})
export class KinoSeasonsComponent implements OnInit {

  allFeatures: Array<any>;
  customFeatures: Array<any>;
  theMovie;

  selectedSerie: number;
  seasonResults: any;
  episodeResults: any[];
  display: boolean;
  overview: string;
  name: string;
  activeTab: number = 0;

  constructor(public ref: DynamicDialogRef,
              public config: DynamicDialogConfig,
              private messageService: MessageService, private seriesService: SeriesService) {
    this.allFeatures = [];
    this.customFeatures = [];
  }

  ngOnInit() {
    // console.log(this.config.data);
    // this.theMovie = this.config.data;
    this.getSeasons(this.config.data.movie);
  }

  getSeasons(id: number): void {
    this.episodeResults = [];

    this.selectedSerie = id;
    this.seriesService.getSeasons(id)
      .then(search => {
        this.seasonResults = search.seasons;
      });
  }

  getEpisodes(seasonNum: number) {
    this.seriesService.getEpisodes(this.selectedSerie, seasonNum)
      .then(search => {
        this.episodeResults = search.episodes;
        this.activeTab = 1;
      });
  }

  getDateColor(releaseDate: string) {
    if (moment(moment(releaseDate)).isBefore(moment().format('YYYY-MM-DD'))) {
      return 'red';
    } else {
      return 'green';
    }
  }
}
