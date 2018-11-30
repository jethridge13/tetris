import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PreviousRouteService } from '../previous-route.service';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss']
})
export class StartMenuComponent implements OnInit {

  constructor(private previousRouteService: PreviousRouteService,
    private router: Router) { }

  ngOnInit() {
  }

  private goToPreviousRoute() {
    this.previousRouteService.goToPreviousRoute();
  }

}
