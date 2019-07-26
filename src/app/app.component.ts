import { Component } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material/icon'

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <mat-icon svgIcon="wineLights"></mat-icon>
      <a mat-button routerLink="/home"><h1>Wine Lights</h1></a>
      <span class="flex-spacer"></span>
      <button mat-icon-button><mat-icon>account_circle</mat-icon></button>
      <button mat-icon-button><mat-icon>lock_open</mat-icon></button>
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
