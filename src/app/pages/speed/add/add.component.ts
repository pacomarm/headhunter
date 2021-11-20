import { Component, OnInit } from '@angular/core';
import { SpeedService } from 'src/app/services/speed.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddSpeedComponent implements OnInit {
  form = {
    title: '',
    email: '',
    description: '',
    modality: '',
  };

  constructor(private speedService: SpeedService) {}

  ngOnInit(): void {}

  submit() {
    this.speedService.createSpeed(this.form).subscribe((res) => {
      console.log(res);
      Swal.fire(
        'Éxito!',
        'Speed Date agregada correctamente',
        'success'
      )
    });
  }
}
