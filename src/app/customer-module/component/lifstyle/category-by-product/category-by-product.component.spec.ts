import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryByProductComponent } from './category-by-product.component';

describe('CategoryByProductComponent', () => {
  let component: CategoryByProductComponent;
  let fixture: ComponentFixture<CategoryByProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryByProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryByProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
