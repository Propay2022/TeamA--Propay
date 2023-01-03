import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancefirstComponent } from './insurancefirst.component';

describe('InsurancefirstComponent', () => {
  let component: InsurancefirstComponent;
  let fixture: ComponentFixture<InsurancefirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancefirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurancefirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
