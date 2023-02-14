import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.scss'],
})
export class MovieDescriptionComponent implements OnInit {
  constructor(
    private moviesService: MoviesService,
    private router: ActivatedRoute
  ) {}
  movieDetailResult: any;
  getMovieCastResult:any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getparamid#');
    this.getMovie(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovie(id: any) {
    this.moviesService.getMovieDetail(id).subscribe((result) => {
      console.log(result, 'getmoviedetails#');
      this.movieDetailResult = result;
    });
  }

  getMovieCast(id:any)
  {
    this.moviesService.getMovieCast(id).subscribe((result)=>{
      console.log(result,'movieCast#');
      this.getMovieCastResult = result.cast;
    });
  }

}
