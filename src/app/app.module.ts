import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';
import { AboutMenuComponent } from './about-menu/about-menu.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'start', component: StartMenuComponent },
  { path: 'settings', component: SettingsMenuComponent },
  { path: 'about', component: AboutMenuComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SettingsMenuComponent,
    AboutMenuComponent,
    StartMenuComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
