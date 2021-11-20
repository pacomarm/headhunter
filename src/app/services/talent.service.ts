import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { apiResponse } from '../types/api-response';

@Injectable({
  providedIn: 'root',
})
export class TalentService {
  constructor(private httpClient: HttpClient) {}

  createTalent(talent: any) {
    const body = {
      email: talent.email,
      name: talent.name,
      username: talent.username,
      telephone: talent.telephone,
      password: talent.password,
      state: talent.state,
      profession: talent.profession,
      skills: talent.skills,
      cost: talent.cost,
      schedule: 'tarde',
    };
    return this.httpClient.post(`${environment.api}/talent/signup`, body);
  }

  getTalent() {
    return this.httpClient.get<apiResponse>(`${environment.api}/talent`);
  }
}
