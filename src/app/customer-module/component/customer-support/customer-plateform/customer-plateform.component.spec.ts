import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPlateformComponent } from './customer-plateform.component';

describe('CustomerPlateformComponent', () => {
  let component: CustomerPlateformComponent;
  let fixture: ComponentFixture<CustomerPlateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPlateformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPlateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
