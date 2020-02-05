import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormArray, FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login-service.service';
import { SetUpUser } from '../setUpUser';
import { ageValidator } from './validators';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  constructor(private service: SubscribeService, private fb: FormBuilder) {}

  user = this.fb.group({
   name : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern('^[a-zA-Z]+$')]],
   surname : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern('^[a-zA-Z]+$')]],
   age : [  , [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('^[0-9]+$'), ageValidator(0)]],
   email : ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9.]{1,35}[@]{1}[a-zA-Z0-9]{1,20}[.]{1}[a-zA-Z]{1,3}$')]],
   telephoneNumber : ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(10), Validators.maxLength(10)]],
   password : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(16), Validators.pattern('^[0-9a-zA-Z]*$')]],
 });

 upFriendsList: SetUpUser[] = this.service.upFriendsList;
 mod = false;

 ngOnInit() {
 }

 save(user = this.user.value) {
  this.service.save(user)
  .subscribe(data => {this.upFriendsList = data; });
 }


 onSubmit() {
   console.log(this.user);
   this.user.reset();
 }
}
