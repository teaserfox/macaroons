import { Injectable } from '@angular/core';
import {ShopType} from "../types/shop.type";

@Injectable()
export class ShopService {

  constructor() { }

  getShops(): ShopType[] {
    // ajax
    return [
      {
        img: '1.png',
        title: 'Макарун с малиной',
        price: 1.70,
      },
      {
        img: '2.png',
        title: 'Макарун с манго',
        price: 1.70,
      },
      {
        img: '3.png',
        title: 'Пирог с ванилью',
        price: 1.70,
      },
      {
        img: '4.png',
        title: 'Пирог с фисташками',
        price: 1.70,
      }
    ];
  }
}
