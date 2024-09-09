import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineCharStackedAreaComponent } from './line-char-stacked-area.component';

describe('LineCharStackedAreaComponent', () => {
  let component: LineCharStackedAreaComponent;
  let fixture: ComponentFixture<LineCharStackedAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LineCharStackedAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineCharStackedAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
