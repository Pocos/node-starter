import { Component, OnInit, forwardRef  } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'input-field',
  template: `<input class="input" [value]="value" (input)="change($event.target.value)" (blur)="touch()">`,
  styleUrls: ['./input-field-sm.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldSMComponent),
      multi: true	}
  ]
})
export class InputFieldSMComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  value: any;
  change(): void {}
  touch(): void {}

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.change = fn;
  }
  registerOnTouched(fn: any): void {
    this.touch = fn;
  }

  ngOnInit() {
  }

}
