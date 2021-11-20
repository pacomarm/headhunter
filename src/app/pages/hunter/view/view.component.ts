import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import { HeadHunterService } from '../../../services/headhunter.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewHunterComponent implements OnInit {

  hunterId: number = 0
  list: any = []

  constructor(private route: ActivatedRoute, private headhunterService: HeadHunterService) { }

  ngOnInit(): void {
    this.hunterId = parseInt(this.route.snapshot.paramMap.get('id') || '0')
    this.headhunterService.getHeadHunter().subscribe((data) => {
      if(data.status && data.headhunters){
        this.list = data.headhunters.map((e:any) => ({
          name: e.name,
          email: e.email,
          username: e.username,
          telephone: e.telephone,
          state: e.state,
          company: e.company,
          projects: e.projects,
          contry: e.contry,
          reputation: e.reputation,
        }))
      }
      Swal.fire(
        'Éxito!',
        'Cazadores recuperados correctamente',
        'success'
      )
    });
  }

}
