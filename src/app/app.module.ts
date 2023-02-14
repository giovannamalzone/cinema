import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesService } from './services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { InicialMovieComponent } from './components/inicial-movie/inicial-movie.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultSearchComponent } from './pages/result-search/result-search.component';
import { MovieDescriptionComponent } from './pages/movie-description/movie-description.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    InicialMovieComponent,
    SearchComponent,
    ResultSearchComponent,
    MovieDescriptionComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
