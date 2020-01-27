import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostCounterService {

  private postCount: number = 0;

  constructor() { }

  getPostCount() {
    return this.postCount;
  }

  getAndIncrement() {
    return this.postCount++;
  }

  increment() {
    this.postCount++;
  }
}
