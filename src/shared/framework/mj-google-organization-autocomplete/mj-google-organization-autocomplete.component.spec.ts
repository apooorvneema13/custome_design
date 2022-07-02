import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MjGoogleOrganizationAutocompleteComponent } from './mj-google-organization-autocomplete.component';

describe('MjGoogleOrganizationAutocompleteComponent', () => {
  let component: MjGoogleOrganizationAutocompleteComponent;
  let fixture: ComponentFixture<MjGoogleOrganizationAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MjGoogleOrganizationAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MjGoogleOrganizationAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
