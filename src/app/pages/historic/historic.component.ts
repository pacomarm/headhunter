import { Component, OnInit } from '@angular/core';
import { AnnounceService } from '../../services/announce.service';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent implements OnInit {

  list:any = []

  constructor(private announceService: AnnounceService) { }

  ngOnInit(): void {
  }

  submit(){
    this.announceService.getRecord().subscribe((data) => {
      if(data.status && data.records){
        this.list = data.records.map((e:any) => ({
          email: e.email,
          projects: e.projects
        }))
      }
    });
  }

}
