import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillpaymentpageComponent } from './billpaymentpage.component';

describe('BillpaymentpageComponent', () => {
  let component: BillpaymentpageComponent;
  let fixture: ComponentFixture<BillpaymentpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillpaymentpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillpaymentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
