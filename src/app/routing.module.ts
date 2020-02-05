import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { InputFieldSMComponent } from './input-field-sm/input-field-sm.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'home' , component: HomeComponent },
  { path: 'match' , component: MatchesComponent, canActivate: [AuthGuardService] },
  { path: 'login' , component: LoginComponent },
  { path: 'subscribe' , component: SubscribeComponent },
  { path: 'input' , component: InputFieldSMComponent },
  { path: 'profile' , component: ProfileComponent, canActivate: [AuthGuardService]},
  { path: '**' , component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] })
  export class AppRoutingModule {}

