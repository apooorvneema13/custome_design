import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarloginComponent } from './starlogin.component';

describe('StarloginComponent', () => {
  let component: StarloginComponent;
  let fixture: ComponentFixture<StarloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
