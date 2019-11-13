import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DiscoverService} from '../services/discover.service';
import {HttpClient} from '@angular/common/http';
import * as _ from 'lodash';

@Component({
  selector: 'app-kino-discover',
  templateUrl: './kino-discover.component.html',
  styleUrls: ['./kino-discover.component.scss']
})
export class KinoDiscoverComponent implements OnInit {

  discoveredMovies;
  discoveredSeries;
  checked: boolean = true;

  constructor(private discoverService: DiscoverService, private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.discoverMovies();
  }

  handleChange(e) {
    console.log(e.checked);
    if (e.checked) {
      this.discoverMovies();
    } else {
      this.discoverSeries();
    }
  }

  discoverMovies() {
    this.discoverService.discoverMovies().then(data => {
      this.discoveredMovies = data.results;
      this.discoveredSeries = [];
    });
  }

  discoverSeries() {
    this.discoverService.discoverSeries().then(data => {
      this.discoveredSeries = data.results;
      this.discoveredMovies = [];
    });
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

  saveFavoriteTv(id: number, event: any): void {
    event.stopPropagation();
    const allEntries = JSON.parse(localStorage.getItem('tv-series')) || [];
    if (allEntries.indexOf(id) === -1) {
      allEntries.push(id);
      localStorage.setItem('tv-series', JSON.stringify(allEntries));
      /*this.snackBar.open('Favourite Added..', '', {
        duration: 2000,
      });*/
    } else {
      /*this.snackBar.open('Favourite Already Exists..', '', {
        duration: 2000,
      });*/
    }
  }

  removeFavoriteTv(id: number, event: any): void {
    event.stopPropagation();
    const allEntries = JSON.parse(localStorage.getItem('tv-series')) || [];
    const pulled = _.pull(allEntries, id);
    localStorage.setItem('tv-series', JSON.stringify(pulled));

    /*this.snackBar.open('Favourite Removed..', '', {
      duration: 2000,
    });*/
  }

  isStoredTv(id: number): boolean {
    const allEntries = JSON.parse(localStorage.getItem('tv-series')) || [];
    return !(allEntries.indexOf(id) === -1);
  }

  showDialog(theSerie: any) {
    alert(theSerie.name);
  }
}
