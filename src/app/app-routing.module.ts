import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {SeriesListComponent} from './series/series-list.component';
import {MovieListComponent} from './movies/movie-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'series', component: SeriesListComponent},
  {path: 'movies', component: MovieListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
