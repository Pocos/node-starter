import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatchesComponent } from './matches/matches.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './routing.module';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorHttpCallsService } from './interceptors/interceptor-http-calls.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { InputFieldSMComponent } from './input-field-sm/input-field-sm.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    LoginComponent,
    HomeComponent,
    SubscribeComponent,
    ProfileComponent,
    LoaderComponent,
    InputFieldSMComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ShowHidePasswordModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
    	useClass: InterceptorHttpCallsService,
      multi: true },
      { provide: HTTP_INTERCEPTORS,
        useClass: LoaderInterceptor,
        multi: true },
        CookieService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

}
