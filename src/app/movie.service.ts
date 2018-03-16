import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MovieService {

  private apiUrl = 'https://api.themoviedb.org/3/';
  private apiKey = 'api_key=###';

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

  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
