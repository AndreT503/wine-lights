import { Component, OnInit, ViewChild } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { MatIconRegistry, MatSidenav } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary" fxLayoutGap="8px">
      <mat-icon svgIcon="wineLights"></mat-icon>
      <button mat-icon-button><mat-icon>menu</mat-icon></button>

      <a mat-button routerLink="/home">
        <mat-icon svgIcon="wineLights"></mat-icon>
        <span class="mat-h2">Wine Lights</span>
      </a>
      <span class="flex-spacer"></span>
      <button
        mat-mini-fab
        routerLink="/user/profile"
        matTooltip="Profile"
        aria-aria-label="User Profile"
      >
        <mat-icon>account_circle</mat-icon>
      </button>
      <button
        mat-mini-fab
        routerLink="/user/logout"
        matTooltip="Logout"
        aria-label="Logout"
      >
        <mat-icon>lock_open</mat-icon>
      </button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'wine-lights'
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'wineLights',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/wineLights.svg')
    )
  }
}
