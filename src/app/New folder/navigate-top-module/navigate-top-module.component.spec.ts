import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateTopModuleComponent } from './navigate-top-module.component';

describe('NavigateTopModuleComponent', () => {
  let component: NavigateTopModuleComponent;
  let fixture: ComponentFixture<NavigateTopModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigateTopModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateTopModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
