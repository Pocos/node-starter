import { Injectable } from '@angular/core';
import { SetUpMatch } from './setUpMatch';
import { Observable, of } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { matchesList } from './matchList';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matches: SetUpMatch[] = matchesList;

  constructor() { }

  addMatch(match: FormGroup) {
    this.matches.push( new SetUpMatch(match.value.teamPlayers, match.value.numPlayers, match.value.date, match.value.hour, match.value.pitch, match.value.price));
    return of (this.matches);
  }

}
