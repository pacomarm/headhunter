import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';





@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [FontAwesomeModule],
  declarations: []
})
export class FontAModule { 
  
  constructor(
    
    ) { 
    library.add(faStar);
  }

  faStar = faStar

}
