import {Component, OnInit} from '@angular/core';
import {SeriesService} from './series.service';
import * as moment from 'moment'
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import * as _ from 'lodash';

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

  constructor(private seriesService: SeriesService, private router: Router, public snackBar: MatSnackBar) {
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

  saveFavorite(id: number, event: any): void {
    event.stopPropagation();
    const allEntries = JSON.parse(localStorage.getItem('tv-series')) || [];
    if (allEntries.indexOf(id) === -1) {
      allEntries.push(id);
      localStorage.setItem('tv-series', JSON.stringify(allEntries));
      this.snackBar.open('Favourite Added..', '', {
        duration: 2000,
      })
    } else {
      this.snackBar.open('Favourite Already Exists..', '', {
        duration: 2000,
      })
    }
  }

  removeFavorite(id: number, event: any): void {
    event.stopPropagation();
    const allEntries = JSON.parse(localStorage.getItem('tv-series')) || [];
    const pulled = _.pull(allEntries, id);
    localStorage.setItem('tv-series', JSON.stringify(pulled));
    this.snackBar.open('Favourite Removed..', '', {
      duration: 2000,
    })
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

  isStored(id: number): boolean {
    const allEntries = JSON.parse(localStorage.getItem('tv-series')) || [];
    return !(allEntries.indexOf(id) === -1);
  }
}
