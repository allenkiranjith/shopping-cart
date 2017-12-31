import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingContactDetailsComponent } from './shipping-contact-details.component';

describe('ShippingContactDetailsComponent', () => {
  let component: ShippingContactDetailsComponent;
  let fixture: ComponentFixture<ShippingContactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingContactDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
