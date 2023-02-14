import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDescriptionComponent } from './pages/movie-description/movie-description.component';
import { ResultSearchComponent } from './pages/result-search/result-search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movie/:id',
    component: MovieDescriptionComponent,
  },
  {
    path: 'result-search',
    component: ResultSearchComponent,
  }

];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],

  exports: [
      RouterModule
  ],
})
export class AppRoutingModule { }
