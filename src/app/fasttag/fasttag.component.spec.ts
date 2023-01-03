import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasttagComponent } from './fasttag.component';

describe('FasttagComponent', () => {
  let component: FasttagComponent;
  let fixture: ComponentFixture<FasttagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasttagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FasttagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
