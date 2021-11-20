import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { apiResponse } from '../types/api-response';

@Injectable({
  providedIn: 'root'
})
export class TalentService {

  constructor(private httpClient: HttpClient,) { }

  getTalent() {
    return this.httpClient.get<apiResponse>(`${environment.api}/talent`);
  }

  createTalent(talent:any){
    const body = {
      email: talent.email,
      name: talent.name,
      password: talent.password,
      state: 'Puebla',
      profession: talent.profession,
      skills: talent.skills
    }
    return this.httpClient.post(`${environment.api}/talent/signup`, body);
  }

}
