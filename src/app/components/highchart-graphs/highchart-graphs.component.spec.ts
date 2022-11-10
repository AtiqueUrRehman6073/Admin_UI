import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartGraphsComponent } from './highchart-graphs.component';

describe('HighchartGraphsComponent', () => {
  let component: HighchartGraphsComponent;
  let fixture: ComponentFixture<HighchartGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighchartGraphsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighchartGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
