import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {MovieService} from '../services/movies.service';
import {SeriesService} from '../services/series.service';

@Component({
  selector: 'app-kino-saved',
  templateUrl: './kino-saved.component.html',
  styleUrls: ['./kino-saved.component.scss']
})

export class KinoSavedComponent implements OnInit {

  savedTv: string;
  saved: string;
  movieResults: any = [];
  tvResults: any = [];

  constructor(private movieService: MovieService, private seriesService: SeriesService) {
  }

  ngOnInit() {
    this.saved = localStorage.getItem('movies');
    _.each(JSON.parse(this.saved), (movie) => {
      this.movieService.getMovie(movie).then(search => {
        // console.log(search.id);
        this.movieResults.push(search);
      });
    });


    this.savedTv = localStorage.getItem('tv-series');
    _.each(JSON.parse(this.savedTv), (a) => {
      this.seriesService.searchSeriesById(a).then(search => {
        // console.log(search.id);
        this.tvResults.push(search);
      });
    });
  }

}
