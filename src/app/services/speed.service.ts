import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { apiResponse } from '../types/api-response';

@Injectable({
  providedIn: 'root',
})
export class SpeedService {
  constructor(private httpClient: HttpClient) {}

  createSpeed(speed: any) {
    const body = {
      title: speed.title,
      email: speed.email,
      description: speed.description,
      modality: 'Online',
    };
    return this.httpClient.post(`${environment.api}/speeddate`, body);
  }

  getSpeeds() {
    return this.httpClient.get<apiResponse>(`${environment.api}/speeddate`);
  }
}
