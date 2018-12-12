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
  display: boolean;
  overview: string;
  name: string;
  theSerie: any;
  allGenres: any;
  currentGenres: string[];

  constructor(private seriesService: SeriesService, private router: Router, public snackBar: MatSnackBar) {
    this.display = false;
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
    this.seriesService.getGenres()
      .then(result => {
        // console.log('list:', result.genres);
        this.allGenres = result.genres;
      });
  }

  showDialog(theSerie: any) {
    this.theSerie = theSerie;
    const serieGenres = this.theSerie.genre_ids;
    const foundGenres = _.map(this.allGenres, function (o) {
      if (serieGenres.indexOf(o.id) !== -1) {
        return o.name
      }
    });
    this.currentGenres = _.compact(foundGenres);
    this.display = true;
  }

  showDetails(id: number) {
    this.router.navigateByUrl('/detail/' + id);
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

  isStored(id: number): boolean {
    const allEntries = JSON.parse(localStorage.getItem('tv-series')) || [];
    return !(allEntries.indexOf(id) === -1);
  }
}
