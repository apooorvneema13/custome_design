import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverMakeupComponent } from './discover-makeup.component';

describe('DiscoverMakeupComponent', () => {
  let component: DiscoverMakeupComponent;
  let fixture: ComponentFixture<DiscoverMakeupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverMakeupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
