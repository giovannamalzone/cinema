import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { MovieDescriptionComponent } from './pages/movie-description/movie-description.component';
import { ResultSearchComponent } from './pages/result-search/result-search.component';

const routes: Routes = [
  {path:'',component:ResultSearchComponent},
  {path:'search',component:SearchComponent},
  {path:'movie/:id',component:MovieDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
