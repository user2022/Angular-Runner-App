import {Component, OnInit} from '@angular/core';
import { RunnersService} from '../model/runners.service';
import { Model} from '../model/runner';


@Component({
  selector: 'app-runner-list', // the selector so it would be <app-runner-list> in my app html page
  templateUrl: './runner-list.component.html', // the html file name
  styleUrls: ['./runner-list.component.css'] // the css it will use
})
export class RunnerListComponent implements OnInit {
  p = 1; // Page number to start on for pagination
  title = 'Runners';
  myRunners: Model.Runner[]; // Model.Runner is a type I created that matches the runner list json data
  arLength: any;

  constructor(private ruService: RunnersService) { } // Putting private or public before the ruService will automatically
  // make it a property that I can use in the rest of my code and because it's in the constructor it will
  // be declared upon component creation

  ngOnInit(): void {
    this.ruService.getRunners().subscribe(list => this.myRunners = list); // This will return the object of all the runners
    this.ruService.getRunners().subscribe(list => this.arLength = list.length); // This will be used to set if 'Loader' element is
    // visible or not
  }

}
