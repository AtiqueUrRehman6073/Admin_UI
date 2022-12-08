import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticEyeComponent } from './robotic-eye.component';

describe('RoboticEyeComponent', () => {
  let component: RoboticEyeComponent;
  let fixture: ComponentFixture<RoboticEyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboticEyeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboticEyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
