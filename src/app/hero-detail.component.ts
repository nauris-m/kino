import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';
import {SeriesService} from './series/series.service';
import * as moment from 'moment';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  // error: any;
  // navigated = false; // true if navigated here
  seasons: any;
  serie: any;
  episodeResults: any;

  constructor(private seriesService: SeriesService,
              private heroService: HeroService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      /*if (params['id'] !== undefined) {
        const id = +params['id'];
        this.navigated = true;
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
      } else {
        this.navigated = false;
        this.hero = new Hero();
      }*/
      // console.log(params.id);
      this.getSeasons(params);
    });
  }

  getSeasons(params: Params) {
    this.seriesService.getSeasons(params.id).then(result => {
      console.log(result.seasons);
      this.serie = result;
      this.seasons = result.seasons;
    })
  }

  /*save(): void {
    this.heroService
      .save(this.hero)
      .then(hero => {
        this.hero = hero; // saved hero, w/ id if new
        this.goBack(hero);
      })
      .catch(error => this.error = error); // TODO: Display error message
  }*/

  goBack(): void {
    // this.close.emit(savedHero);
    // if (this.navigated) { window.history.back(); }
    window.history.back();
  }

  getEpisodes(seasonNum: number): void {
    this.seriesService.getEpisodes(this.serie.id, seasonNum)
      .then(search => {
        // console.log('getEpisodes:', search);
        this.episodeResults = search.episodes;
        console.log(search);
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
