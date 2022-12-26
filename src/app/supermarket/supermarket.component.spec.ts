/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SupermarketComponent } from './supermarket.component';

describe('SupermarketComponent', () => {
  let component: SupermarketComponent;
  let fixture: ComponentFixture<SupermarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
