import {Component, OnInit} from '@angular/core';
import {MovieService} from './movie.service';

@Component({
  selector: 'my-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  searchResults: any;
  movieResults: any = {};

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
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
}
