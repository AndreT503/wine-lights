import {
  DomSanitizerFake,
  MatIconRegistryFake,
  ObservableMediaFake,
  commonTestingModules,
  commonTestingProviders,
} from './common/common.testing'
import { Observable, Subscription, of } from 'rxjs'
import { TestBed, async } from '@angular/core/testing'

import { AppComponent } from './app.component'
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material'
import { MediaObserver } from '@angular/flex-layout'
import { RouterTestingModule } from '@angular/router/testing'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: commonTestingProviders.concat([
        { provide: MediaObserver, useClass: ObservableMediaFake },
        { provide: MatIconRegistry, useClass: MatIconRegistryFake },
        { provide: DomSanitizer, useClass: DomSanitizerFake },
      ]),
      declarations: [AppComponent],
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })

  TestBed.configureTestingModule({
    imports: commonTestingModules,
    providers: commonTestingProviders.concat([
      { provide: MediaObserver, useClass: ObservableMediaFake },
      { provide: MatIconRegistry, useClass: MatIconRegistryFake },
      { provide: DomSanitizer, useClass: DomSanitizerFake },
    ]),

    declarations: [AppComponent],
  })
})
