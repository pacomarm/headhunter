import { Component, OnInit } from '@angular/core';
import { TalentService } from '../../../services/talent.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddTalentComponent implements OnInit {

  form = {
    name: '',
    email: '',
    password: '',
    state: '',
    profession: '',
    skills: ''
  }

  constructor(private talentService: TalentService) { }

  ngOnInit(): void {
  }

  submit(){
    this.talentService.createTalent(this.form).subscribe((res) => {
      console.log(res)
    });
  }

}
