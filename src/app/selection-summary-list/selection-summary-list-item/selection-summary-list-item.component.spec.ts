import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionSummaryListItemComponent } from './selection-summary-list-item.component';

describe('SelectionSummaryListItemComponent', () => {
  let component: SelectionSummaryListItemComponent;
  let fixture: ComponentFixture<SelectionSummaryListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionSummaryListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionSummaryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
