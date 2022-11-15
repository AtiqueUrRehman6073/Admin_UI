import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBGComponent } from './test-bg.component';

describe('TestBGComponent', () => {
  let component: TestBGComponent;
  let fixture: ComponentFixture<TestBGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestBGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
