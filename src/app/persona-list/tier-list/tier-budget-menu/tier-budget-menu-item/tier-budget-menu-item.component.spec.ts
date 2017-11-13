import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TierBudgetMenuItemComponent } from './tier-budget-menu-item.component';

describe('TierBudgetMenuItemComponent', () => {
  let component: TierBudgetMenuItemComponent;
  let fixture: ComponentFixture<TierBudgetMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TierBudgetMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TierBudgetMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
