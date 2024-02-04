import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListDasboardComponent } from './product-list-dasboard.component';

describe('ProductListDasboardComponent', () => {
  let component: ProductListDasboardComponent;
  let fixture: ComponentFixture<ProductListDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListDasboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
