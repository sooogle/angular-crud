import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'emp/create', component: CreateComponent},
  {path: 'emp/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
