import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MjGoogleAutocompleteComponent } from './mj-google-autocomplete.component';

describe('MjGoogleAutocompleteComponent', () => {
  let component: MjGoogleAutocompleteComponent;
  let fixture: ComponentFixture<MjGoogleAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MjGoogleAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MjGoogleAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
