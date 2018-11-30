import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PreviousRouteService } from '../previous-route.service';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss']
})
export class SettingsMenuComponent implements OnInit {

  constructor(private previousRouteService: PreviousRouteService,
    private router: Router) { }

  ngOnInit() {
  }

  private goToPreviousRoute() {
    this.previousRouteService.goToPreviousRoute();
  }

}
