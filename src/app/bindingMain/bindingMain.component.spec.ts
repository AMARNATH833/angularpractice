/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BindingMainComponent } from './bindingMain.component';

describe('BindingMainComponent', () => {
  let component: BindingMainComponent;
  let fixture: ComponentFixture<BindingMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
