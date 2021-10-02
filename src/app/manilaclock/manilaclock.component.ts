import { Component, OnInit } from '@angular/core';
import { ManilaTime } from '../servertime';
import { ServertimeService } from '../servertime.service';

@Component({
  selector: 'app-manilaclock',
  templateUrl: './manilaclock.component.html',
  styleUrls: ['./manilaclock.component.css']
})
export class ManilaclockComponent implements OnInit {
  constructor(private servertimeService: ServertimeService) { }

  manilaTime: ManilaTime = {
    time: ''
  }

  ngOnInit(): void {
    this.getManilaTime();
  }

  getManilaTime(): void {
    this.servertimeService.getManilaTime()
    .subscribe(manilaTime => this.manilaTime = manilaTime);
  }
 
}
