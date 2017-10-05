import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionPriceComponent } from './selection-price.component';

describe('SelectionPriceComponent', () => {
  let component: SelectionPriceComponent;
  let fixture: ComponentFixture<SelectionPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
