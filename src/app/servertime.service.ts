import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ServerTime, ManilaTime } from './servertime'


@Injectable({
  providedIn: 'root'
})
export class ServertimeService {
  private apiUrl = 'api/v1';

  constructor(private http: HttpClient) { }

  getServerTime(): Observable<ServerTime> {
    const url = `${this.apiUrl}/time/server`;
    return this.http.get<ServerTime>(url);
  }

  getManilaTime(): Observable<ManilaTime> {
    const url = `${this.apiUrl}/time/manila`;
    return this.http.get<ManilaTime>(url);
  }
}
