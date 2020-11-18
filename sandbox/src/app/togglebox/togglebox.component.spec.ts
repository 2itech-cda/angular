import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleboxComponent } from './togglebox.component';

describe('ToggleboxComponent', () => {
  let component: ToggleboxComponent;
  let fixture: ComponentFixture<ToggleboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
