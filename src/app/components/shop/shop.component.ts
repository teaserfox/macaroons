import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShopType} from "../../types/shop.type";

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit {


  @Input()
  get shop(): ShopType {
    return this._shop;
  }
  set shop(value: ShopType) {
    this._shop = value;
  }
  private _shop!: ShopType;

  @Input() orderElement!: HTMLElement;
  @Input() hoverGradient!: string;

  @Output() addToCardEvent = new EventEmitter<{title:string; target:HTMLElement;}>();

  addProductToCard(): void {
    this.addToCardEvent.emit({title: this.shop.title, target: this.orderElement});
  }

  constructor() {
    this._shop = {
      img: '',
      title: '',
      price: 0,
    }
  }

  ngOnInit(): void {
  }

}
