import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackBtnComponent } from './back-btn/back-btn.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    BackBtnComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackBtnComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
