import {Component, ElementRef, ViewChild} from '@angular/core';
import {ShopType} from "./types/shop.type";
import {FormValueType} from "./types/form-value.type";
import {BasketService} from "./services/basket.service";
import {ShopService} from "./services/shop.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ShopService]
})

export class AppComponent {

  constructor(public basketService: BasketService, private shopService: ShopService) {
  }

  @ViewChild('shopElement') shopElement!: ElementRef<HTMLElement>;

  headerPhone: string = '375293689868';
  footerInstagram: string = 'https://instagram.com';
  showPresent: boolean = false;
  hoverGradient: string = 'linear-gradient(90deg, rgb(252,252,252) 0%, rgb(215,72,92) 100%)';
  public isBasketOpened: boolean = false;


  shops: ShopType[] = [];

  ngOnInit(): void {
    this.checkPresentTime();
    this.shops = this.shopService.getShops();
  }

  private checkPresentTime(): void {
    const now = new Date();
    const hours: number = now.getHours();

    // Показываем подарок с 00:00 до 05:00
    this.showPresent = hours >= 3 && hours < 23;
  }

  formValues: FormValueType = {
    itemTitle: '',
    name: '',
    phone: ''
  }

  scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  scrollToShop(): void {
    this.shopElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  addToCard(event: { title: string, target: HTMLElement, price: number }): void {
    this.scrollTo(event.target);
    this.formValues.itemTitle = event.title.toUpperCase();
    this.basketService.count++;
    this.basketService.total += event.price;
    this.isBasketOpened = true;
  }

  createOrder(): void {
    if (!this.formValues.itemTitle) {
      alert('сделайте выбор');
      return;
    }
    if (!this.formValues.name) {
      alert('ваше имя');
      return;
    }
    if (!this.formValues.phone) {
      alert('введите номер');
      return;
    }
    alert('Спасибо за заказ!');

    this.formValues = {
      itemTitle: '',
      name: '',
      phone: ''
    }
  }

}
