import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  countActiveToInactive(): number {
    this.activeToInactiveCounter++;
    return this.activeToInactiveCounter;
  }
  countInactiveToActive(): number {
    this.inactiveToActiveCounter++;
    return this.inactiveToActiveCounter;
  }
}
