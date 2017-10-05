import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionDescriptionComponent } from './selection-description.component';

describe('SelectionDescriptionComponent', () => {
  let component: SelectionDescriptionComponent;
  let fixture: ComponentFixture<SelectionDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
