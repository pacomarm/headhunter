import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewTalentComponent implements OnInit {

  talentId: number = 0

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.talentId = parseInt(this.route.snapshot.paramMap.get('id') || '0')
  }

}
