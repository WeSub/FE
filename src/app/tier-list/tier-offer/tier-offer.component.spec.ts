import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TierOfferComponent } from './tier-offer.component';

describe('TierOfferComponent', () => {
  let component: TierOfferComponent;
  let fixture: ComponentFixture<TierOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TierOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TierOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
