import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasttagHistoryComponent } from './fasttag-history.component';

describe('FasttagHistoryComponent', () => {
  let component: FasttagHistoryComponent;
  let fixture: ComponentFixture<FasttagHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasttagHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FasttagHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
