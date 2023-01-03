import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DthpageComponent } from './dthpage.component';

describe('DthpageComponent', () => {
  let component: DthpageComponent;
  let fixture: ComponentFixture<DthpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DthpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DthpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
