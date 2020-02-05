import { Component, OnInit } from '@angular/core';
import { MatchService } from './match.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SetUpMatch } from './setUpMatch';
import { numPlayersValidator } from './validators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches = this.service.matches;
  matchesNumber: number = this.matches.length;

  constructor(private service: MatchService, private fb: FormBuilder, private http: HttpClient) { }

  match = this.fb.group({
    teamPlayers : [, [Validators.required]],
    numPlayers : [ , [Validators.required, numPlayersValidator(0)]],
    date : [ , [Validators.required]],
    hour : [ , [Validators.required]],
    pitch : ['', [ Validators.required, Validators.pattern('^[a-z A-Z]+$')]],
    price : ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(1), Validators.maxLength(2)]],
  });

  addMatch(match = this.match) {
    this.service.addMatch(match)
    .subscribe( data => {this.matches = data ; });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.matches);
  }

}
