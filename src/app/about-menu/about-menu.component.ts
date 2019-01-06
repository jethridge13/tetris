import { Component, OnInit } from '@angular/core';
import { PreviousRouteService } from '../previous-route.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-menu',
  templateUrl: './about-menu.component.html',
  styleUrls: ['./about-menu.component.scss']
})
export class AboutMenuComponent implements OnInit {

	title = 'Tetris by Josh';

  constructor(private previousRouteService: PreviousRouteService) { }

  ngOnInit() {
  }

  private goToPreviousRoute() {
    this.previousRouteService.goToPreviousRoute();
  }

}
