import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerModuleComponent } from './influencer-module.component';

describe('InfluencerModuleComponent', () => {
  let component: InfluencerModuleComponent;
  let fixture: ComponentFixture<InfluencerModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluencerModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencerModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
