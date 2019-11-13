import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SeriesService {

  // https://api.themoviedb.org/3/search/movie?query=matrix&api_key=###
  // https://api.themoviedb.org/3/movie/603?api_key=###

  private apiUrl = 'https://api.themoviedb.org/3/';
  private apiKey = 'api_key=' + environment.API_KEY;

  constructor(private http: Http) {
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

  searchSeriesById(id: number): Promise<any> {
    const url = `${this.apiUrl}tv/${id}?${this.apiKey}`;
    return this.http
      .get(url)
      .toPromise()
      .then((response) => {
        return response.json() as any;
      })
      .catch(this.handleError);
  }

  searchSeries(name: string): Promise<any> {
    const url = `${this.apiUrl}search/tv?query=${name}&${this.apiKey}`;
    return this.http
      .get(url)
      .toPromise()
      .then((response) => {
        return response.json() as any;
      })
      .catch(this.handleError);
  }

  getSeasons(id: number): Promise<any> {
    const url = `${this.apiUrl}tv/${id}?${this.apiKey}`;
    // console.log(url);
    return this.http
      .get(url)
      .toPromise()
      .then((response) => {
        return response.json() as any;
      })
      .catch(this.handleError);
  }

  getEpisodes(serie: number, season: number): Promise<any> {
    // console.log(movie, season);
    // https://api.themoviedb.org/3/tv/1402?api_key=###&append_to_response=season/1
    // https://api.themoviedb.org/3/tv/1402?api_key=###&append_to_response=season/1
    // https://api.themoviedb.org/3/tv/1402/season/1?api_key=###&language=en-US
    const url = `${this.apiUrl}tv/${serie}/season/${season}?${this.apiKey}&append_to_response=season/`;
    // console.log(url);
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
