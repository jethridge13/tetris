import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PreviousRouteService {

  private routeStack: string[];
  private currentRoute: string;

  constructor(private router: Router) {
    this.routeStack = [];
    this.currentRoute = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.routeStack.push(this.currentRoute);
        this.currentRoute = event.url;
      }
    });
  }

  public getPreviousRoute() {
    return this.routeStack.pop();
  }
}
