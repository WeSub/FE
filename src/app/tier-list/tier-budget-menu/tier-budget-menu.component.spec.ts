import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TierBudgetMenuComponent } from './tier-budget-menu.component';

describe('TierBudgetMenuComponent', () => {
  let component: TierBudgetMenuComponent;
  let fixture: ComponentFixture<TierBudgetMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TierBudgetMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TierBudgetMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
