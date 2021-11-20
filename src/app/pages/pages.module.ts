import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAModule } from '../modules/font-awesome/font-awesome.module';
import { DateComponent } from './date/date.component';
import { LandingComponent } from './landing/landing.component';
import { SurveyComponent } from './survey/survey.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LookupComponent } from './lookup/lookup.component';
import { DateSignupComponent } from './date-signup/date-signup.component';
import { HistoricComponent } from './historic/historic.component';
import { AddTalentComponent } from './talent/add/add.component';
import { ViewTalentComponent } from './talent/view/view.component';
import { AddHunterComponent } from './hunter/add/add.component';
import { ViewHunterComponent } from './hunter/view/view.component';
import { AddAnnounceComponent } from './announce/add/add.component';
import { AddSpeedComponent } from './speed/add/add.component';

@NgModule({
  declarations: [
    DateComponent,
    LandingComponent,
    SurveyComponent,
    LookupComponent,
    DateSignupComponent,
    HistoricComponent,
    AddTalentComponent,
    ViewTalentComponent,
    AddHunterComponent,
    ViewHunterComponent,
    AddAnnounceComponent,
    AddSpeedComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class PagesModule { }
