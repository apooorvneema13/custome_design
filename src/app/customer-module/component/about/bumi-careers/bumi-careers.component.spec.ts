import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BumiCareersComponent } from './bumi-careers.component';

describe('BumiCareersComponent', () => {
  let component: BumiCareersComponent;
  let fixture: ComponentFixture<BumiCareersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BumiCareersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BumiCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
