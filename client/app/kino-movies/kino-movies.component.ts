import {Component, OnInit} from '@angular/core';
import {MovieService} from '../services/movies.service';
import {Router} from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-kino-movies',
  templateUrl: './kino-movies.component.html',
  styleUrls: ['./kino-movies.component.scss']
})
export class KinoMoviesComponent implements OnInit {
  searchResults: any;
  movieResults: any = {};
  theMovie: any;
  allGenres: any;
  display: boolean;
  currentGenres: string[];

  constructor(private movieService: MovieService, private router: Router) {
  }

  ngOnInit() {
    this.movieService.getGenres()
      .then(result => {
        this.allGenres = result.genres;
      });

    this.movieService.searchMovies('wick')
      .then(search => {
        this.searchResults = search.results;
      });
  }

  openDialog(movie: any) {
    this.theMovie = movie;
    const serieGenres = this.theMovie.genre_ids;
    const foundGenres = _.map(this.allGenres, function (o) {
      if (serieGenres.indexOf(o.id) !== -1) {
        return o.name;
      }
    });
    this.currentGenres = _.compact(foundGenres);
    this.display = true;
  }

  search(term: string): void {
    this.movieService.searchMovies(term)
      .then(search => {
        // console.log('list:', search.results);
        this.searchResults = search.results;
      });
  }

  getMovie(id: number): void {
    this.movieService.getMovie(id)
      .then(search => {
        console.log('getMovie:', search);
        this.movieResults = search;
      });
  }

  gotoSeries(): void {
    const link = ['/series'];
    this.router.navigate(link);
  }

  saveFavorite(id: number, event: any): void {
    // alert(id);
    event.stopPropagation();
    const allEntries = JSON.parse(localStorage.getItem('movies')) || [];
    if (allEntries.indexOf(id) === -1) {
      allEntries.push(id);
      localStorage.setItem('movies', JSON.stringify(allEntries));
      /*this.snackBar.open('Favourite Added..', '', {
        duration: 2000,
      });*/
    } else {
      /*this.snackBar.open('Favourite Already Exists..', '', {
        duration: 2000,
      });*/
    }
  }

  removeFavorite(id: number, event: any): void {
    // alert(id);
    event.stopPropagation();
    const allEntries = JSON.parse(localStorage.getItem('movies')) || [];
    const pulled = _.pull(allEntries, id);
    localStorage.setItem('movies', JSON.stringify(pulled));

    /*this.snackBar.open('Favourite Removed..', '', {
      duration: 2000,
    });*/
  }

  isStored(id: number): boolean {
    const allEntries = JSON.parse(localStorage.getItem('movies')) || [];
    return !(allEntries.indexOf(id) === -1);
  }
}
