import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  url: string = 'https://api.themoviedb.org/3/';
  api_key: string = '9a441632bef8878cfc1db25ff66aa809';

  constructor(private http: HttpClient) {}

  getLatestMovies(): Observable<any> {
    return this.http.get<any>(this.url + 'movie/latest?api_key=' + this.api_key);
  }

  getPopularMovies(): Observable<any> {
    return this.http.get<any>(this.url + 'movie/popular?api_key=' + this.api_key);
  }

  getTopMovies(): Observable<any> {
    return this.http.get<any>(this.url + 'movie/top_rated?api_key=' + this.api_key);
  }

  getNextMovies(): Observable<any> {
    return this.http.get<any>(this.url + 'movie/upcoming?api_key=' + this.api_key);
  }

  getMovieDescription(): Observable<any> {
    return this.http.get<any>(this.url + 'movie/upcoming?api_key=' + this.api_key);
  }

  getSearchMovie(data:any): Observable<any> {
    console.log(data, 'movie#');
    return this.http.get<any>(this.url + 'search/movie?api_key=' + this.api_key + '&query=' + data.movieName);
  }

}
