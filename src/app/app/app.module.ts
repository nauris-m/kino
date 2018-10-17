import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule, InMemoryBackendConfigArgs} from 'angular-in-memory-web-api';
import {InMemoryDataService} from '../in-memory-data.service';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {HeroesComponent} from '../heroes.component';
import {HeroDetailComponent} from '../hero-detail.component';
import {HeroSearchComponent} from '../search/hero-search.component';
import {SeriesListComponent} from '../series/series-list.component';

import {HeroService} from '../hero.service';
import {SeriesService} from '../series/series.service';
import {MovieService} from '../movies/movie.service';
import {MovieListComponent} from '../movies/movie-list.component';

import {
  MatButtonModule, MatToolbarModule, MatCardModule, MatDividerModule, MatIconModule,
  MatDialogModule, MatFormFieldModule, MatListModule, MatChipsModule, MatSnackBarModule
} from '@angular/material';
import {CourseDialogComponent} from '../movies-dialog/details-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {ListboxModule} from 'primeng/listbox';
import {HeaderSectionComponent} from '../header-section/header-section.component';
import {LeftMenuComponent} from '../left-menu/left-menu.component';
import {SlideMenuModule} from 'primeng/primeng';
import {MenuModule} from 'primeng/menu';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 600}),
    InMemoryWebApiModule.forRoot(InMemoryDataService, <InMemoryBackendConfigArgs>{passThruUnknownUrl: true}),
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatListModule,
    MatChipsModule,
    MatSnackBarModule,
    ButtonModule,
    ListboxModule,
    MenuModule
  ],
  declarations: [
    AppComponent,
    HeroSearchComponent,
    HeroesComponent,
    HeroDetailComponent,
    SeriesListComponent,
    MovieListComponent,
    CourseDialogComponent,
    HeaderSectionComponent,
    LeftMenuComponent
  ],
  providers: [HeroService, SeriesService, MovieService],
  bootstrap: [AppComponent, HeaderSectionComponent, LeftMenuComponent],
  entryComponents: [CourseDialogComponent]
})

export class AppModule {
}
