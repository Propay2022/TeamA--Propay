import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardHistoryComponent } from './creditcard-history.component';

describe('CreditcardHistoryComponent', () => {
  let component: CreditcardHistoryComponent;
  let fixture: ComponentFixture<CreditcardHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditcardHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditcardHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
