import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateComponent } from './pages/date/date.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { LookupComponent } from './pages/lookup/lookup.component';
import { DateSignupComponent } from './pages/date-signup/date-signup.component';
import { HistoricComponent } from './pages/historic/historic.component';
import { AddTalentComponent } from './pages/talent/add/add.component';
import { ViewTalentComponent } from './pages/talent/view/view.component';
import { AddHunterComponent } from './pages/hunter/add/add.component';
import { ViewHunterComponent } from './pages/hunter/view/view.component';
import { AddAnnounceComponent } from './pages/announce/add/add.component';
import { AddSpeedComponent } from './pages/speed/add/add.component';

const routes: Routes = [
  {path: 'announce/add', component: AddAnnounceComponent},
  {path: 'date', component: DateComponent},
  {path: 'date/add', component: AddSpeedComponent},
  {path: 'date/signup', component: DateSignupComponent},
  {path: 'historic', component: HistoricComponent},
  {path: 'hunter/add', component: AddHunterComponent},
  {path: 'hunter/view/:id', component: ViewHunterComponent},
  {path: 'lookup', component: LookupComponent},
  {path: 'survey', component: SurveyComponent},
  {path: 'talent/add', component: AddTalentComponent},
  {path: 'talent/view/:id', component: ViewTalentComponent},
  {path: 'home', component: LandingComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
