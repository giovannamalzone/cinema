import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}

  searchForm = new FormGroup({
  movieName: new FormControl(null),
  });

  searchResults: any = [];

  submitForm() {
    console.log(this.searchForm.value, 'searchform#');
    this.moviesService
      .getSearchMovie(this.searchForm.value)
      .subscribe((result) => {
        console.log(result, 'searchmovies##');
        this.searchResults = result.results;
      });
  }
}
