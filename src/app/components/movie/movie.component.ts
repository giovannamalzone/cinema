import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  active = 0;
  itemsRow = 5;
  latestMovies: Array<any> = new Array();
  popularMovies: Array<any> = new Array();
  topMovies: Array<any> = new Array();
  nextMovies: Array<any> = new Array();

  constructor(private moviesService: MoviesService) {}

  next() {
    if (this.active >= 0 && this.active < this.popularMovies.length - 1) {
      this.active++;
      console.log(this.active);
    }
  }

  back() {
    if (this.active != 0) {
      this.active--;
      console.log(this.active);
    }
  }

  ngOnInit() {
    //this.getLatestMovies();
    this.getPopularMovies();
    interval(20000).subscribe(() => {
      console.log(this.active);
      if (this.active <= 0 && this.active >= 0) {
        this.active++;
        console.log(this.active);
      } else {
        this.active = 0;
      }
      console.log(this.active);
    });
  }

  // getLatestMovies() {
  //   this.moviesService
  //     .getLatestMovies()
  //     .pipe(take(1))
  //     .subscribe(
  //       (response) => this.onSucess(response.results),
  //       (error) => this.onError(error)
  //     );
  // }

  getPopularMovies() {
    this.moviesService
      .getPopularMovies()
      .pipe(take(1))
      .subscribe(
        (response) => this.onSucess(response.results),
        (error) => this.onError(error)
      );
  }

  onSucess(response: Movie[]) {
    //this.latestMovies = response;
    this.popularMovies = response;
    console.log(this.popularMovies);
  }

  onError(error: any) {
    console.log('Erro ao carregar os filmes');
  }



}
