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
    this.routeStack.push(this.currentRoute);
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.currentRoute !== event.url) {
          this.routeStack.push(this.currentRoute);
          this.currentRoute = event.url;
        }
      }
    });
  }

  public goToPreviousRoute(): void {
    this.router.navigateByUrl(this.getPreviousRoute());
  }

  public getPreviousRoute(): string {
    let lastRoute = this.routeStack.pop();
    if (lastRoute === this.currentRoute) {
      lastRoute = this.routeStack.pop();
    }
    return lastRoute;
  }
}
