import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByBrandsComponent } from './products-by-brands.component';

describe('ProductsByBrandsComponent', () => {
  let component: ProductsByBrandsComponent;
  let fixture: ComponentFixture<ProductsByBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsByBrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsByBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
