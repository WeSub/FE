import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaListItemComponent } from './persona-list-item.component';

describe('PersonaListItemComponent', () => {
  let component: PersonaListItemComponent;
  let fixture: ComponentFixture<PersonaListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
