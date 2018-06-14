import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-connections-counter',
  templateUrl: './connections-counter.component.html',
  styleUrls: ['./connections-counter.component.css']
})
export class ConnectionsCounterComponent implements OnInit {

  constructor(private statsService: StatsService) {
  }

  ngOnInit() {
    this.statsService.init();
  }

  get activeConnections(): number {
    return this.statsService.activeConnections;
  }
}
