import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { apiResponse } from '../types/api-response';

@Injectable({
  providedIn: 'root',
})
export class SpeedService {
  constructor(private httpClient: HttpClient) {}

  createTalent(speed: any) {
    const body = {
      name: speed.name,
      email: speed.email,
      description: speed.description,
      modality: speed.modality,
    };
    return this.httpClient.post(`${environment.api}/speeddate`, body);
  }

  getTalent() {
    return this.httpClient.get<apiResponse>(`${environment.api}/speeddate`);
  }
}
