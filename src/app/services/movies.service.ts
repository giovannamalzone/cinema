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

  getPlayingMovies(): Observable<any> {
    return this.http.get<any>(this.url + 'movie/772071?api_key=' + this.api_key);
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

  getMovieDetail(data:any): Observable<any> {
    return this.http.get(this.url + 'movie/' + data + '?api_key=' + this.api_key);
  }

  getSearchMovie(data:any): Observable<any> {
    console.log(data, 'movie#');
    return this.http.get<any>(this.url + 'search/movie?api_key=' + this.api_key + '&query=' + data.movieName);
  }

  getGenreMovie(): Observable<any> {
    return this.http.get<any>(this.url + "genre/movie/list?api_key=" + this.api_key);
  }

  getMovieCast(data: any): Observable<any> {
    return this.http.get(this.url + 'movie/' + data + "/credits?api_key=" + this.api_key);
  }

}
