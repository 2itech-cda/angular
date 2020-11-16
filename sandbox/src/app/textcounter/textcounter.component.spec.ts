import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextcounterComponent } from './textcounter.component';

describe('TextcounterComponent', () => {
  let component: TextcounterComponent;
  let fixture: ComponentFixture<TextcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextcounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
