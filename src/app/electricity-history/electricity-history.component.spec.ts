import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityHistoryComponent } from './electricity-history.component';

describe('ElectricityHistoryComponent', () => {
  let component: ElectricityHistoryComponent;
  let fixture: ComponentFixture<ElectricityHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricityHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricityHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
