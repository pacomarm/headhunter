import { Component, OnInit } from '@angular/core';
import { TalentService } from '../../../services/talent.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddHunterComponent implements OnInit {

  form = {
    name: ''
  }

  namedfksdjfk = ''

  constructor(private talentService:TalentService) { }

  ngOnInit(): void {
  }

  submit(){
    this.talentService.createHunter(this.form).subscribe((res) => {
      console.log(res)
    });
  }

}
