import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageItemSvcListComponent } from './package-item-svc-list.component';

describe('PackageItemSvcListComponent', () => {
  let component: PackageItemSvcListComponent;
  let fixture: ComponentFixture<PackageItemSvcListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageItemSvcListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageItemSvcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
