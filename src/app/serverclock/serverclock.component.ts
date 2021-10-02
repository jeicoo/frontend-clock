import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

import { ServerTime } from '../servertime';
import { ServertimeService } from '../servertime.service';

@Component({
  selector: 'app-serverclock',
  templateUrl: './serverclock.component.html',
  styleUrls: ['./serverclock.component.css']
})
export class ServerclockComponent implements OnInit, OnDestroy {
  constructor(private servertimeService: ServertimeService) { }

  timeInterval: Subscription = new Subscription()
  serverTime: ServerTime = {
    time: '',
    date: '',
    timezone: ''
  }

  ngOnInit(): void {
    this.getServerTime()
  }

  getServerTime(): void {
    this.timeInterval = interval(1000)
      .pipe(
        startWith(0),
        switchMap(() => this.servertimeService.getServerTime()) 
      ).subscribe(serverTime => this.serverTime = serverTime);
  }

  ngOnDestroy(): void {
    this.timeInterval.unsubscribe();
  }
}
