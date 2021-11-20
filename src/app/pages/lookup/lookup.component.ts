import { Component, OnInit } from '@angular/core';
import { AnnounceService } from '../../services/announce.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent implements OnInit {

  list:any = []

  constructor(private announceService: AnnounceService) { }

  ngOnInit(): void {
  }
  
  submit(){
    this.announceService.getAnnouncements().subscribe((data) => {
      if(data.status && data.projects){
        this.list = data.projects.map((e:any) => ({
          title: e.title,
          description: e.description,
          category: e.category,
          status: e.status,
        }))
        Swal.fire(
          'Éxito!',
          'Proyectos recuperados correctamente',
          'success'
        )
      }
    });
  }

}
