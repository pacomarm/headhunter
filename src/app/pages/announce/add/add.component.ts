import { Component, OnInit } from '@angular/core';
import { AnnounceService } from 'src/app/services/announce.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddAnnounceComponent implements OnInit {
  form = {
    title: '',
    description: '',
    category: '',
    payment: '',
    status: '',
  };

  constructor(private announceService: AnnounceService) {}

  ngOnInit(): void {}

  submit() {
    this.announceService.createAnnounce(this.form).subscribe((res) => {
      console.log(res);
    });
  }
}
