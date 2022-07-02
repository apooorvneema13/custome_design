import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifstyleComponent } from './lifstyle.component';

describe('LifstyleComponent', () => {
  let component: LifstyleComponent;
  let fixture: ComponentFixture<LifstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifstyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
