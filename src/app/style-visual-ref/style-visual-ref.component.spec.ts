import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleVisualRefComponent } from './style-visual-ref.component';

describe('StyleVisualRefComponent', () => {
  let component: StyleVisualRefComponent;
  let fixture: ComponentFixture<StyleVisualRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleVisualRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleVisualRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
