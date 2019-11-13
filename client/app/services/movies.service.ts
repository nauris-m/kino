import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MovieService {

  private apiUrl = 'https://api.themoviedb.org/3/';
  private apiKey = 'api_key=' + environment.API_KEY;

  constructor(private http: Http) {
  }

  getMovie(id: number): Promise<any> {
    const url = `${this.apiUrl}movie/${id}?${this.apiKey}`;
    return this.http
      .get(url)
      .toPromise()
      .then((response) => {
        return response.json() as any;
      })
      .catch(this.handleError);
  }

  searchMovies(name: string): Promise<any> {
    const url = `${this.apiUrl}search/movie?query=${name}&${this.apiKey}`;
    return this.http
      .get(url)
      .toPromise()
      .then((response) => {
        return response.json() as any;
      })
      .catch(this.handleError);
  }

  getGenres(): Promise<any> {
    const url = `${this.apiUrl}genre/movie/list?${this.apiKey}&language=en-US`;
    return this.http
      .get(url)
      .toPromise()
      .then((response) => {
        return response.json() as any;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
