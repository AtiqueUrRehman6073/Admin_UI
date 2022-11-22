import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMemberFormComponent } from './add-new-member-form.component';

describe('AddNewMemberFormComponent', () => {
  let component: AddNewMemberFormComponent;
  let fixture: ComponentFixture<AddNewMemberFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewMemberFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewMemberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
