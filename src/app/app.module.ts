import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesService } from './services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { InicialMovieComponent } from './components/inicial-movie/inicial-movie.component';

@NgModule({
  declarations: [AppComponent, MovieComponent, InicialMovieComponent],
  imports: [BrowserModule, MatMenuModule, HttpClientModule],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
