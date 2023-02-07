import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss']
})
export class ResultSearchComponent implements OnInit {

searchResult: any = [];


constructor(private moviesService: MoviesService){}

ngOnInit(): void{
  this.searchData();
}

searchData(){
  // this.moviesService.getSearchMovie().subscribe((result) => {
  //   console.log(result, 'resultSearch#');
  //   this.moviesService = this.moviesService;
  // })
}


}
