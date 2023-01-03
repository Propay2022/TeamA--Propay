import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanshomeComponent } from './planshome.component';

describe('PlanshomeComponent', () => {
  let component: PlanshomeComponent;
  let fixture: ComponentFixture<PlanshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanshomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
