import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ageValidator } from '../subscribe/validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user = this.fb.group({
    email : ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9.]{1,35}[@]{1}[a-zA-Z0-9]{1,20}[.]{1}[a-zA-Z]{1,3}$')]],
    telephoneNumber : ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(10), Validators.maxLength(10)]],
    password : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(16), Validators.pattern('^[0-9a-zA-Z]*$')]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }


}
