import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

import { ManilaTime } from '../servertime';
import { ServertimeService } from '../servertime.service';

@Component({
  selector: 'app-manilaclock',
  templateUrl: './manilaclock.component.html',
  styleUrls: ['./manilaclock.component.css']
})
export class ManilaclockComponent implements OnInit {
  constructor(private servertimeService: ServertimeService) { }

  timeInterval: Subscription = new Subscription()
  manilaTime: ManilaTime = {
    time: ''
  }

  ngOnInit(): void {
    this.getManilaTime();
  }

  getManilaTime(): void {
    this.timeInterval = interval(1000)
      .pipe(
        startWith(0),
        switchMap(() => this.servertimeService.getManilaTime())
      ).subscribe(manilaTime => this.manilaTime = manilaTime);
  }

  ngOnDestroy(): void {
    this.timeInterval.unsubscribe();
  }
 
}
