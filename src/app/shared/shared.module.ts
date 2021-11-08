import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackBtnComponent } from './back-btn/back-btn.component';


@NgModule({
  declarations: [
    BackBtnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackBtnComponent
  ]
})
export class SharedModule { }
