import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWheelComponent } from './two-wheel.component';

describe('TwoWheelComponent', () => {
  let component: TwoWheelComponent;
  let fixture: ComponentFixture<TwoWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWheelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
