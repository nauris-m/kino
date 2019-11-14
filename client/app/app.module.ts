// Angular
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {JwtModule} from '@auth0/angular-jwt';
// Modules
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
// Services
import {UserService} from './services/user.service';
import {AuthService} from './services/auth.service';
import {AuthGuardLogin} from './services/auth-guard-login.service';
import {AuthGuardAdmin} from './services/auth-guard-admin.service';
// Components
import {AppComponent} from './app.component';
import {AboutComponent} from './kino-welcome/about.component';
import {RegisterComponent} from './kino-register/register.component';
import {LoginComponent} from './kino-login/login.component';
import {LogoutComponent} from './kino-logout/logout.component';
import {AccountComponent} from './kino-account/account.component';
import {AdminComponent} from './kino-admin/admin.component';
import {NotFoundComponent} from './kino-found/not-found.component';
import {
  AutoCompleteModule,
  ButtonModule,
  CalendarModule,
  CardModule,
  ChartModule,
  CheckboxModule,
  DialogModule,
  DropdownModule,
  FieldsetModule,
  InputSwitchModule,
  InputTextModule,
  KeyFilterModule,
  MenuModule,
  MessageModule,
  OverlayPanelModule,
  PanelModule,
  ScrollPanelModule,
  SidebarModule,
  TabViewModule,
  TooltipModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FeaturesFilterPipe} from './pipes/features-filter.pipe';
import {ReleasesComponent} from './kino-releases/releases.component';
import {SeriesService} from './services/series.service';
import {KinoSeriesComponent} from './kino-series/kino-series.component';
import {HttpModule} from '@angular/http';
import {MovieService} from './services/movies.service';
import {KinoMoviesComponent} from './kino-movies/kino-movies.component';
import {KinoSavedComponent} from './kino-saved/kino-saved.component';
import {KinoDiscoverComponent} from './kino-discover/kino-discover.component';
import {DiscoverService} from './services/discover.service';
import {MovieCardComponent} from './shared/movie-card/movie-card.component';
import {SerieCardComponent} from './shared/serie-card/serie-card.component';
import {MessageService} from 'primeng/api';
import {KinoInfoComponent} from './kino-info-dialog/kino-info.component';
import {KinoSeasonsComponent} from './kino-seasons-dialog/kino-seasons.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    FeaturesFilterPipe,
    ReleasesComponent,
    KinoSeriesComponent,
    KinoMoviesComponent,
    KinoSavedComponent,
    KinoDiscoverComponent,
    MovieCardComponent,
    SerieCardComponent,
    KinoInfoComponent,
    KinoSeasonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 600}),
    ButtonModule,
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    CardModule,
    MenuModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    CalendarModule,
    KeyFilterModule,
    DropdownModule,
    InputTextModule,
    MessageModule,
    TooltipModule,
    DynamicDialogModule,
    SidebarModule,
    DialogModule,
    CheckboxModule,
    TabViewModule,
    ScrollPanelModule,
    ToastModule,
    TableModule,
    FieldsetModule,
    ChartModule,
    OverlayPanelModule,
    InputSwitchModule,
    AutoCompleteModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        // whitelistedDomains: ['localhost:3000', 'localhost:4200']
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    UserService,
    SeriesService,
    MovieService,
    DiscoverService,
    MessageService
  ],
  entryComponents: [
    KinoInfoComponent, KinoSeasonsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule {
}
