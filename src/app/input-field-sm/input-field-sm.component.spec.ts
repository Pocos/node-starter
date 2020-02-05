import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldSMComponent } from './input-field-sm.component';

describe('InputFieldSMComponent', () => {
  let component: InputFieldSMComponent;
  let fixture: ComponentFixture<InputFieldSMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFieldSMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldSMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
