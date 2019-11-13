import * as _ from 'lodash';
import {Component, Input} from '@angular/core';
import {AppComponent} from '../../app.component';
import {KinoInfoComponent} from '../../kino-info-dialog/kino-info.component';
import {DialogService} from 'primeng/api';

@Component({
  selector: 'app-serie-card',
  templateUrl: './serie-card.component.html',
  styleUrls: ['./serie-card.component.scss'],
  providers: [DialogService]
})

export class SerieCardComponent {
  @Input() serie: boolean;

  constructor(private app: AppComponent, public dialogService: DialogService) {
  }

  showDialog(serie) {
    const ref = this.dialogService.open(KinoInfoComponent, {
      data: {
        movie: serie
      },
      header: 'Serie Details',
      width: '30%'
    });
  }

  saveFavorite(id: number, event: any): void {
    event.stopPropagation();
    const allEntries = JSON.parse(localStorage.getItem('tv-series')) || [];
    if (allEntries.indexOf(id) === -1) {
      allEntries.push(id);
      localStorage.setItem('tv-series', JSON.stringify(allEntries));
      this.app.showToast('Series', 'Favourite Added..');
    } else {
      this.app.showToast('Series', 'Favourite Already Exists..');
    }
  }

  removeFavorite(id: number, event: any): void {
    event.stopPropagation();
    const allEntries = JSON.parse(localStorage.getItem('tv-series')) || [];
    const pulled = _.pull(allEntries, id);
    localStorage.setItem('tv-series', JSON.stringify(pulled));
    this.app.showToast('Series', 'Favourite Removed..');
  }

  isStored(id: number): boolean {
    const allEntries = JSON.parse(localStorage.getItem('tv-series')) || [];
    return !(allEntries.indexOf(id) === -1);
  }
}
