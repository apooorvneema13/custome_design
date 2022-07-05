import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyFashionComponent } from './beauty-fashion.component';

describe('BeautyFashionComponent', () => {
  let component: BeautyFashionComponent;
  let fixture: ComponentFixture<BeautyFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyFashionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
