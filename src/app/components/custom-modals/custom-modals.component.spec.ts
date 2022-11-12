import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomModalsComponent } from './custom-modals.component';

describe('CustomModalsComponent', () => {
  let component: CustomModalsComponent;
  let fixture: ComponentFixture<CustomModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomModalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
