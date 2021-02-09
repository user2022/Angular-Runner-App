import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; // Importing route so I can switch between component views
// It is a SPA (single page application) but using route lets me switch views to show different data
import {Location} from '@angular/common'; // Allows me to navigate backwards and forwards

import {RunnersService} from '../model/runners.service';
import {Subscription} from 'rxjs'; // allows me to get my parameters from the URL

import {Model} from '../model/runner';

@Component({
  selector: 'app-runner-details',
  templateUrl: './runner-details.component.html',
  styleUrls: ['./runner-details.component.css']
})
export class RunnerDetailsComponent implements OnInit { // implements the onInit life cycle hook, this will execute
  // on initialization of the app

  Runner: Model.RunnerDetail[]; // Sets the type to detail interface
  private RouteSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private RuService: RunnersService,
    private location: Location
  ) { }

  goBack(): void {
    this.location.back(); // Will take the user back to where they previously where
  } // as my app is a singular page importing location will change the url to change the view

  getRunner(id) { // gets runner by ID
    this.RuService.getRun(id).subscribe((runner: Model.RunnerDetail[]) => this.Runner = runner);
  } // subscribers to the getRun method in RuService and sets Runner to the object from my service

  ngOnInit() {
    this.RouteSub = this.route.params.subscribe(params => { // params will fetch the parameters of my url
      this.getRunner(params.id); // gets the id parameter from URL
    });
  }

}
