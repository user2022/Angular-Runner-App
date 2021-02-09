import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunnerDetailsComponent} from './runner-details/runner-details.component';
import {RouterModule, Routes} from '@angular/router';
import {RunnerListComponent} from './runner-list/runner-list.component';

const routes: Routes = [ // my declared routes
  { path: 'detail/:id', component: RunnerDetailsComponent, pathMatch: 'full' }, // path is the URL path for my view
  // component is the component to show
  {path: 'runners', component: RunnerListComponent},
  {path: '', redirectTo: '/runners', pathMatch: 'full'}, // by default if there is no path it will redirect to the runners
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) // will use the routes array to tell it the information about the routes I want to use
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
