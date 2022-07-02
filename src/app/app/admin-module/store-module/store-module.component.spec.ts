import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreModuleComponent } from './store-module.component';

describe('StoreModuleComponent', () => {
  let component: StoreModuleComponent;
  let fixture: ComponentFixture<StoreModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
