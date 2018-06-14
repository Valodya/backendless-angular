import { Injectable } from '@angular/core';
import Backendless from 'backendless';

export class Stats {
  public objectId?: string;
  public key: string;
  public value: number;
}

const ACTIVE_CONNECTIONS_COUNTER_WHERE_CLAUSE = 'key = \'activeConnections\'';

const StatsStore = Backendless.Data.of(Stats);

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  public activeConnections: number;

  init(): void {
    const query: Backendless.DataQueryBuilder = Backendless.DataQueryBuilder
      .create()
      .setWhereClause(ACTIVE_CONNECTIONS_COUNTER_WHERE_CLAUSE);

    StatsStore.find<Stats>(query).then((stats: Stats[]) => {
      if (stats[0]) {
        this.updateActiveConnectionsCounter(stats[0]);
      }

      this.addRealTimeListeners();
    });
  }

  addRealTimeListeners(): void {
    const rtHandlers: Backendless.EventHandler = StatsStore.rt();

    rtHandlers.addUpdateListener<Stats>(ACTIVE_CONNECTIONS_COUNTER_WHERE_CLAUSE, this.updateActiveConnectionsCounter.bind(this));
  }

  updateActiveConnectionsCounter(activeConnectionCounterStats: Stats): void {
    this.activeConnections = activeConnectionCounterStats.value;
  }
}
