import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DthHistoryComponent } from './dth-history.component';

describe('DthHistoryComponent', () => {
  let component: DthHistoryComponent;
  let fixture: ComponentFixture<DthHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DthHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DthHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
