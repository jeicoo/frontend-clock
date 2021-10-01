import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ServerTime } from './servertime'


@Injectable({
  providedIn: 'root'
})
export class ServertimeService {
  private apiUrl = 'api/v1';

  constructor(private http: HttpClient) { }

  getServerTime(): Observable<ServerTime> {
    const url = `${this.apiUrl}/time/server`;
    return this.http.get<ServerTime>(url)
  } 
}
