import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { apiResponse } from '../types/api-response';

@Injectable({
  providedIn: 'root',
})
export class AnnounceService {
  constructor(private httpClient: HttpClient) {}

  createAnnounce(annouce: any) {
    const body = {
      title: annouce.title,
      description: annouce.description,
      category: annouce.category,
      payment: annouce.payment,
      status: annouce.status,
    };

    return this.httpClient.post(`${environment.api}/project`, body);
  }

  getAnnouncements() {
    return this.httpClient.get<apiResponse>(`${environment.api}/project`);
  }
}
