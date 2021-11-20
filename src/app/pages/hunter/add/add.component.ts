import { Component, OnInit } from '@angular/core';
import { HeadHunterService } from '../../../services/headhunter.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddHunterComponent implements OnInit {
  form = {
    name: '',
    username: '',
    telephone: '',
    email: '',
    password: '',
    state: '',
    company: '',
    projects: '',
  };

  constructor(private headhunterService: HeadHunterService) {}

  ngOnInit(): void {}

  submit() {
    this.headhunterService.createHeadHunter(this.form).subscribe((res) => {
      console.log(res);
    });
  }
}
