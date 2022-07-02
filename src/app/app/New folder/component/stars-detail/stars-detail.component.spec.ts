import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsDetailComponent } from './stars-detail.component';

describe('StarsDetailComponent', () => {
  let component: StarsDetailComponent;
  let fixture: ComponentFixture<StarsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
