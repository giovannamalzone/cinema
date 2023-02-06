import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  url: string = 'https://api.themoviedb.org/3/movie/';
  api_key: string = '9a441632bef8878cfc1db25ff66aa809';

  constructor(private http: HttpClient) {}

  getLatestMovies(): Observable<any> {
    return this.http.get<any>(this.url + 'latest?api_key=' + this.api_key);
  }

  getPopularMovies(): Observable<any> {
    return this.http.get<any>(this.url + 'popular?api_key=' + this.api_key);
  }

  getTopMovies(): Observable<any> {
    return this.http.get<any>(this.url + 'top_rated?this.=' + this.api_key);
  }

  getNextMovies(): Observable<any> {
    return this.http.get<any>(this.url + 'upcoming?api_key=' + this.api_key);
  }
}
