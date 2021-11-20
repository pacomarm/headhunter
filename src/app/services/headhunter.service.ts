import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { apiResponse } from '../types/api-response';

@Injectable({
  providedIn: 'root',
})
export class HeadHunterService {
  constructor(private httpClient: HttpClient) {}

  createHeadHunter(headhunter: any) {
    const body = {
      email: headhunter.email,
      name: headhunter.name,
      username: headhunter.username,
      telephone: headhunter.telephone,
      password: headhunter.password,
      state: headhunter.state,
      company: headhunter.company,
      projects: headhunter.projects,
    };
    return this.httpClient.post(`${environment.api}/headhunter/signup`, body);
  }

  getHeadHunter() {
    return this.httpClient.get<apiResponse>(`${environment.api}/headhunter`);
  }
}
