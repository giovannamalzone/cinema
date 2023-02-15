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
  playingMovie: any;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getPlayingMovies();
  }

  getPlayingMovies() {
    this.moviesService.getPlayingMovies().subscribe((result) => {
      this.playingMovie = result;
    });
    console.log(this.playingMovie);
  }


}
