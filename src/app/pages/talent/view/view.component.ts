import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TalentService } from '../../../services/talent.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewTalentComponent implements OnInit {

  talentId: number = 0
  list: any[] = []

  constructor(private route: ActivatedRoute, private talentService: TalentService) { }

  async ngOnInit() {
    this.talentId = parseInt(this.route.snapshot.paramMap.get('id') || '0')
    this.talentService.getTalent().subscribe((data) => {
      if(data.status && data.talents){
        this.list = data.talents.map((e:any) => ({
          email: e.email,
          state: e.state,
          profession: e.profession,
          reputation: e.reputation,
          skills: e.skills
        }))
      }
      Swal.fire(
        'Éxito!',
        'Talentos recuperados correctamente',
        'success'
      )
    });
  }

}
