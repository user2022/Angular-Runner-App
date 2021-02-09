import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RunnerListComponent } from './runner-list/runner-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; // npm install ngx-pagination --save
import { RunnerDetailsComponent } from './runner-details/runner-details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RunnerListComponent,
    RunnerDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
