import { Component, OnInit } from '@angular/core';
import { ServerTime } from '../servertime';
import { ServertimeService } from '../servertime.service';

@Component({
  selector: 'app-serverclock',
  templateUrl: './serverclock.component.html',
  styleUrls: ['./serverclock.component.css']
})
export class ServerclockComponent implements OnInit {
  constructor(private servertimeService: ServertimeService) { }

  serverTime: ServerTime = {
    time: '',
    date: '',
    timezone: ''
  }

  ngOnInit(): void {
    this.getServerTime();
  }

  getServerTime(): void {
    this.servertimeService.getServerTime()
      .subscribe(serverTime => this.serverTime = serverTime);
  }

}
