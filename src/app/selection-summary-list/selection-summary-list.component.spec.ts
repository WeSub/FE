import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionSummaryListComponent } from './selection-summary-list.component';

describe('SelectionSummaryListComponent', () => {
  let component: SelectionSummaryListComponent;
  let fixture: ComponentFixture<SelectionSummaryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionSummaryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionSummaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
