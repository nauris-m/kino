import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DiscoverService {

  private apiUrl = 'https://api.themoviedb.org/3/';
  private apiKey = 'api_key=' + environment.API_KEY;
  private url = 'discover/movie?api_key=270a3daa830565e5ab5557cf7fd3d125&sort_by=popularity.desc';

  constructor(private http: Http) {
  }

  discoverMovies(): Promise<any> {
    return this.http.get(`${this.apiUrl}discover/movie?${this.apiKey}&sort_by=popularity.desc`)
      .toPromise()
      .then((response) => {
        return response.json() as any;
      })
      .catch(this.handleError);
  }

  discoverSeries(): Promise<any> {
    return this.http.get(`${this.apiUrl}discover/tv?${this.apiKey}&sort_by=popularity.desc`)
      .toPromise()
      .then((response) => {
        return response.json() as any;
      })
      .catch(this.handleError);
  }

  handleError() {
    console.log('error');
  }
}
