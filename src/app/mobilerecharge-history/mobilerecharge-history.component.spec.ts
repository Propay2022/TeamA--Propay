import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilerechargeHistoryComponent } from './mobilerecharge-history.component';

describe('MobilerechargeHistoryComponent', () => {
  let component: MobilerechargeHistoryComponent;
  let fixture: ComponentFixture<MobilerechargeHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilerechargeHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilerechargeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
