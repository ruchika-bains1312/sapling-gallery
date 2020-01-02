import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryOnGardenComponent } from './try-on-garden.component';

describe('TryOnGardenComponent', () => {
  let component: TryOnGardenComponent;
  let fixture: ComponentFixture<TryOnGardenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryOnGardenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryOnGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
