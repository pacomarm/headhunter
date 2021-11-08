import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateComponent } from './pages/date/date.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { LookupComponent } from './pages/lookup/lookup.component';

const routes: Routes = [
  {path: 'date', component: DateComponent},
  {path: 'survey', component: SurveyComponent},
  {path: 'lookup', component: LookupComponent},
  {path: 'home', component: LandingComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
