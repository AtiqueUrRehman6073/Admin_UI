import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewOrderFormComponent } from './add-new-order-form.component';

describe('AddNewOrderFormComponent', () => {
  let component: AddNewOrderFormComponent;
  let fixture: ComponentFixture<AddNewOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewOrderFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
