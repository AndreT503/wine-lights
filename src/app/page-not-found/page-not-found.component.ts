import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-page-not-found',
  template: `
    <p>!!page-not-found!! Go back to <a routerLink="/home">home</a></p>
  `,
  styles: [],
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
