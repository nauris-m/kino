import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroSearchComponent} from './hero-search.component';
import {SeriesListComponent} from './series-list.component';

import {HeroService} from './hero.service';
import {SeriesService} from './series.service';
import {MovieService} from './movie.service';
import {MovieListComponent} from './movie-list.component';

import {MatButtonModule, MatToolbarModule, MatCardModule, MatDividerModule, MatIconModule, MatDialogModule} from '@angular/material';
import {CourseDialogComponent} from './course-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 600}),
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}),
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroesComponent,
    HeroDetailComponent,
    SeriesListComponent,
    MovieListComponent,
    CourseDialogComponent
  ],
  providers: [HeroService, SeriesService, MovieService],
  bootstrap: [AppComponent],
  entryComponents: [CourseDialogComponent]
})

export class AppModule {
}
