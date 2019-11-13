// Angular
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// Services
import {AuthGuardLogin} from './services/auth-guard-login.service';
import {AuthGuardAdmin} from './services/auth-guard-admin.service';
// Components
import {AboutComponent} from './kino-welcome/about.component';
import {RegisterComponent} from './kino-register/register.component';
import {LoginComponent} from './kino-login/login.component';
import {LogoutComponent} from './kino-logout/logout.component';
import {AccountComponent} from './kino-account/account.component';
import {AdminComponent} from './kino-admin/admin.component';
import {NotFoundComponent} from './kino-found/not-found.component';
import {ReleasesComponent} from './kino-releases/releases.component';
import {KinoSeriesComponent} from './kino-series/kino-series.component';
import {KinoMoviesComponent} from './kino-movies/kino-movies.component';
import {KinoSavedComponent} from './kino-saved/kino-saved.component';
import {KinoDiscoverComponent} from './kino-discover/kino-discover.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin]},
  {path: 'notfound', component: NotFoundComponent},
  {path: 'v', component: ReleasesComponent},
  // new
  {path: 'series', component: KinoSeriesComponent},
  {path: 'movies', component: KinoMoviesComponent},
  {path: 'favorites', component: KinoSavedComponent},
  {path: 'discover', component: KinoDiscoverComponent},
  {path: '**', redirectTo: '/notfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
