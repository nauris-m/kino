import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Router} from '@angular/router';
import * as _ from 'lodash';
import {SeriesService} from '../services/series.service';

@Component({
  selector: 'app-kino-series',
  templateUrl: './kino-series.component.html',
  styleUrls: ['./kino-series.component.scss']
})

export class KinoSeriesComponent implements OnInit {
  selectedSerie: number;
  searchResults: any;
  seasonResults: any;
  episodeResults: any[];
  display: boolean;
  overview: string;
  name: string;
  theSerie: any;
  allGenres: any;
  currentGenres: string[];

  constructor(private seriesService: SeriesService, private router: Router, /* private viewportScroller: ViewportScroller*/) {
    this.display = false;
  }

  ngOnInit(): void {
    this.seriesService.searchSeries('walking')
      .then(search => {
        this.searchResults = search.results;
      });

    this.seriesService.getGenres()
      .then(result => {
        this.allGenres = result.genres;
      });
  }

  showDialog(theSerie: any) {
    this.theSerie = theSerie;
    const serieGenres = this.theSerie.genre_ids;
    const foundGenres = _.map(this.allGenres, function (o) {
      if (serieGenres.indexOf(o.id) !== -1) {
        return o.name;
      }
    });
    this.currentGenres = _.compact(foundGenres);
    this.display = true;
  }

  search(term: string): void {
    this.seasonResults = [];
    this.episodeResults = [];

    this.seriesService.searchSeries(term)
      .then(search => {
        this.searchResults = search.results;
      });
  }

  /* todo: remove after moved */
  getSeasons(id: number): void {
    this.episodeResults = [];

    this.selectedSerie = id;
    this.seriesService.getSeasons(id)
      .then(search => {
        this.seasonResults = search.seasons;
      });
  }

  /* todo: remove after moved */
  getEpisodes(seasonNum: number) {
    this.seriesService.getEpisodes(this.selectedSerie, seasonNum)
      .then(search => {
        this.episodeResults = search.episodes;
      });
  }

  /* todo: remove after moved */
  getDateColor(releaseDate: string) {
    if (moment(moment(releaseDate)).isBefore(moment().format('YYYY-MM-DD'))) {
      return 'red';
    } else {
      return 'green';
    }
  }
}
