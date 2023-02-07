import { Component } from '@angular/core';
import { take } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-inicial-movie',
  templateUrl: './inicial-movie.component.html',
  styleUrls: ['./inicial-movie.component.scss'],
})
export class InicialMovieComponent {
  latestMovies: Array<any> = new Array();

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getLatestMovies();
  }

  getLatestMovies() {
    this.moviesService.getLatestMovies().subscribe((result) => {
      this.latestMovies = result.results;
    });
  }
}
