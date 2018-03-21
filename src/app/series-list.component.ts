import {Component, OnInit} from '@angular/core';
import {SeriesService} from './series.service';
import * as moment from 'moment'

@Component({
  selector: 'my-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})

export class SeriesListComponent implements OnInit {
  selectedSerie: number;
  searchResults: any;
  seasonResults: any;
  episodeResults: any[];

  constructor(private seriesService: SeriesService) {
  }

  ngOnInit(): void {
    /*this.seriesService.getMovie(603)
      .then(movie => {
        console.log('getMovie:', movie);
        this.series = movie.title;
        this.tag = movie.tagline;
      });*/

    /*this.seriesService.searchSeries('gotham')
      .then(search => {
        console.log('searchSeries:', search.results);
        this.searchResults = search.results;
      });*/
  }

  search(term: string): void {
    this.seriesService.searchSeries(term)
      .then(search => {
        // console.log('list:', search.results);
        this.searchResults = search.results;
      });
  }

  getSeasons(id: number): void {
    this.selectedSerie = id;
    this.seriesService.getSeasons(id)
      .then(search => {
        // console.log('getMovie:', search);
        this.seasonResults = search.seasons;
      });
  }

  getEpisodes(seasonNum: number): void {
    this.seriesService.getEpisodes(this.selectedSerie, seasonNum)
      .then(search => {
        // console.log('getEpisodes:', search);
        this.episodeResults = search.episodes;
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
