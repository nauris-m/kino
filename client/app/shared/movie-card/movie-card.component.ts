import * as _ from 'lodash';
import {Component, Input} from '@angular/core';
import {AppComponent} from '../../app.component';
import {DialogService} from 'primeng/api';
import {KinoInfoComponent} from '../../kino-info-dialog/kino-info.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  providers: [DialogService]
})

export class MovieCardComponent {
  @Input() movie: any;

  constructor(private app: AppComponent, public dialogService: DialogService) {
  }

  showDialog(movie) {
    // alert(serie.id);
    const cid = movie.id;
    // console.log(cid);
    const ref = this.dialogService.open(KinoInfoComponent, {
      data: {
        movie: movie
      },
      header: 'Movie Details',
      width: '30%'
    });
  }

  saveFavorite(id: number, event: any): void {
    event.stopPropagation();
    const allEntries = JSON.parse(localStorage.getItem('movies')) || [];
    if (allEntries.indexOf(id) === -1) {
      allEntries.push(id);
      localStorage.setItem('movies', JSON.stringify(allEntries));
      this.app.showToast('Movies', 'Favourite Added..');
    } else {
      this.app.showToast('Movies', 'Favourite Already Exists..');
    }
  }

  openDialog(o: any) {
    console.log(o);
  }

  removeFavorite(id: number, event: any): void {
    event.stopPropagation();
    const allEntries = JSON.parse(localStorage.getItem('movies')) || [];
    const pulled = _.pull(allEntries, id);
    localStorage.setItem('movies', JSON.stringify(pulled));
    this.app.showToast('Movies', 'Favourite Removed..');
  }

  isStored(id: number): boolean {
    const allEntries = JSON.parse(localStorage.getItem('movies')) || [];
    return !(allEntries.indexOf(id) === -1);
  }
}
