import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboBarLineChartComponent } from './combo-bar-line-chart.component';

describe('ComboBarLineChartComponent', () => {
  let component: ComboBarLineChartComponent;
  let fixture: ComponentFixture<ComboBarLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComboBarLineChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboBarLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
