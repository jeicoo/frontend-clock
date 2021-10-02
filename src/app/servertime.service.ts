import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

import { ServerTime, ManilaTime } from './servertime'
import { catchError } from 'rxjs/operators';


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
    return this.http.get<ManilaTime>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
      }
    return EMPTY;
  }
}
