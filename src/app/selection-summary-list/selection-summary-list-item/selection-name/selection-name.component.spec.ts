import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionNameComponent } from './selection-name.component';

describe('SelectionNameComponent', () => {
  let component: SelectionNameComponent;
  let fixture: ComponentFixture<SelectionNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
