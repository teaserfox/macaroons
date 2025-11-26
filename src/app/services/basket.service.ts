import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  count: number = 0;
  total: number = 0;

  constructor() { }
}
