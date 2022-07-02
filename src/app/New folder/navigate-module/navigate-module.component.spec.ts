import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateModuleComponent } from './navigate-module.component';

describe('NavigateModuleComponent', () => {
  let component: NavigateModuleComponent;
  let fixture: ComponentFixture<NavigateModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigateModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
