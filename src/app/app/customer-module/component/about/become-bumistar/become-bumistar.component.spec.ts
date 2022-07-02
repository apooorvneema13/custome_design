import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeBumistarComponent } from './become-bumistar.component';

describe('BecomeBumistarComponent', () => {
  let component: BecomeBumistarComponent;
  let fixture: ComponentFixture<BecomeBumistarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomeBumistarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeBumistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
