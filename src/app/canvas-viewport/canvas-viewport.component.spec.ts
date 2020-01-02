import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasViewportComponent } from './canvas-viewport.component';

describe('CanvasViewportComponent', () => {
  let component: CanvasViewportComponent;
  let fixture: ComponentFixture<CanvasViewportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasViewportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
