import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadbandHistoryComponent } from './broadband-history.component';

describe('BroadbandHistoryComponent', () => {
  let component: BroadbandHistoryComponent;
  let fixture: ComponentFixture<BroadbandHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadbandHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroadbandHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
