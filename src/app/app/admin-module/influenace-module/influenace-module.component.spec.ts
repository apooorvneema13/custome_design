import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluenaceModuleComponent } from './influenace-module.component';

describe('InfluenaceModuleComponent', () => {
  let component: InfluenaceModuleComponent;
  let fixture: ComponentFixture<InfluenaceModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluenaceModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluenaceModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
