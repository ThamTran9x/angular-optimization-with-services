import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({ providedIn: 'root' })
export class UsersService {
  activeUsers = ['Minh', 'An'];
  inactiveUsers = ['Chu', 'Mai'];
  activeCounter: number;
  inactiveCounter: number;

  constructor(private counterService: CounterService) {}

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.activeCounter = this.counterService.countActiveToInactive();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.inactiveCounter = this.counterService.countInactiveToActive();
  }
}
