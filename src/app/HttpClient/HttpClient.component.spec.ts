/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpClientComponent } from './HttpClient.component';

describe('HttpClientComponent', () => {
  let component: HttpClientComponent;
  let fixture: ComponentFixture<HttpClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
