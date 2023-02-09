import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResultSearchComponent } from './pages/result-search/result-search.component';
import { MovieDescriptionComponent } from './pages/movie-description/movie-description.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'result-search', component: ResultSearchComponent},
  {path:'movie/:id', component: MovieDescriptionComponent}
];

const routing: ModuleWithProviders =  RouterModule
