import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourWheelComponent } from './four-wheel.component';

describe('FourWheelComponent', () => {
  let component: FourWheelComponent;
  let fixture: ComponentFixture<FourWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourWheelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
