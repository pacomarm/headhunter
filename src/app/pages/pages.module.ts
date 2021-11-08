import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAModule } from '../modules/font-awesome/font-awesome.module';
import { DateComponent } from './date/date.component';
import { LandingComponent } from './landing/landing.component';
import { SurveyComponent } from './survey/survey.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    DateComponent,
    LandingComponent,
    SurveyComponent,
  ],
  imports: [
    CommonModule,
    FontAModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class PagesModule { }
