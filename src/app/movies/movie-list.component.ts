import {Component, OnInit} from '@angular/core';
import {MovieService} from './movie.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {CourseDialogComponent} from '../movies-dialog/details-dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'my-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  searchResults: any;
  movieResults: any = {};

  constructor(private movieService: MovieService, private dialog: MatDialog, private router: Router) {
  }

  ngOnInit(): void {
  }

  openDialog(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    // console.log(id);
    this.movieService.getMovie(id).then(search => {
      // console.log('getMovie:', search);
      // this.movieData = search;
      dialogConfig.data = {
        dataKey: search
      };
      this.dialog.open(CourseDialogComponent, dialogConfig);
    });
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
}