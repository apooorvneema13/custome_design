import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyHomeComponent } from './beauty-home.component';

describe('BeautyHomeComponent', () => {
  let component: BeautyHomeComponent;
  let fixture: ComponentFixture<BeautyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
