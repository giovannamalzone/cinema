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
  popularMovies: Array<any> = new Array();
  topMovies: Array<any> = new Array();
  nextMovies: Array<any> = new Array();

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getPopularMovies();
    this.getTopMovies();
    this.getNextMovies();
  }

  getPopularMovies() {
    this.moviesService.getPopularMovies().subscribe((result) => {
      this.popularMovies = result.results;
    });
  }

  getTopMovies() {
    this.moviesService.getTopMovies().subscribe((result) => {
      this.topMovies = result.results;
    });
  }

  getNextMovies() {
    this.moviesService.getNextMovies().subscribe((result) => {
      this.nextMovies = result.results;
    });
  }

}
