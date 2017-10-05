import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageItemSvcListItemComponent } from './package-item-svc-list-item.component';

describe('PackageItemSvcListItemComponent', () => {
  let component: PackageItemSvcListItemComponent;
  let fixture: ComponentFixture<PackageItemSvcListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageItemSvcListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageItemSvcListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
