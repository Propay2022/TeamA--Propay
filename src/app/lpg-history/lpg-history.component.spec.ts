import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpgHistoryComponent } from './lpg-history.component';

describe('LpgHistoryComponent', () => {
  let component: LpgHistoryComponent;
  let fixture: ComponentFixture<LpgHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LpgHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpgHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
