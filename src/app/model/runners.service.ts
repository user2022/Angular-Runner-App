import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http'; // Allows me to send http requests


import {Model} from './runner'; // importing my interfaces so I can declare the types

@Injectable({
  providedIn: 'root' // this means I don't have to manually import this file into the app module
})
export class RunnersService {
  myUrl = 'https://redcarrunning.azurewebsites.net/api/RunnerService';
  DeUrl = 'https://redcarrunning.azurewebsites.net/api/RunnerService?ukan=';

  getRunners(): Observable<Model.Runner[]> { // Observable allows me to subscribe to the function/data so whenever a change happens
    // I am automatically updated without having to refresh the page
    return this.http.get<Model.Runner[]>(this.myUrl); // Returns the object from the http request
  }

  getRun(id: number): Observable<Model.RunnerDetail[]> {
    const URL = `${this.DeUrl}${id}`; // gets the runner by ID so I can see the details
    return this.http.get<Model.RunnerDetail[]>(URL);
  }

  constructor(private http: HttpClient) { } // declaring a http instance
}
