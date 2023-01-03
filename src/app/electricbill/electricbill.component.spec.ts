import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricbillComponent } from './electricbill.component';

describe('ElectricbillComponent', () => {
  let component: ElectricbillComponent;
  let fixture: ComponentFixture<ElectricbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricbillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
