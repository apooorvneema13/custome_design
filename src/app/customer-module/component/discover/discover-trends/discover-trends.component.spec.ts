import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverTrendsComponent } from './discover-trends.component';

describe('DiscoverTrendsComponent', () => {
  let component: DiscoverTrendsComponent;
  let fixture: ComponentFixture<DiscoverTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverTrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
