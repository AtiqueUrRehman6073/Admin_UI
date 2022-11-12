import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOffCanvasComponent } from './custom-off-canvas.component';

describe('CustomOffCanvasComponent', () => {
  let component: CustomOffCanvasComponent;
  let fixture: ComponentFixture<CustomOffCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomOffCanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomOffCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
