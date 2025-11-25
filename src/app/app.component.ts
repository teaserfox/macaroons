import {Component, ElementRef, ViewChild} from '@angular/core';
import {ShopType} from "./types/shop.type";
import {FormValueType} from "./types/form-value.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild('shopElement') shopElement!: ElementRef<HTMLElement>;

  headerPhone: string = '375293689868';
  footerInstagram: string = 'https://instagram.com';
  showPresent: boolean = false;
  hoverGradient: string = 'linear-gradient(90deg, rgb(252,252,252) 0%, rgb(215,72,92) 100%)';

  shops: ShopType[] = [
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

  ngOnInit(): void {
    this.checkPresentTime();
  }

  private checkPresentTime(): void {
    const now = new Date();
    const hours: number = now.getHours();

    // Показываем подарок с 00:00 до 05:00
    this.showPresent = hours >= 7 && hours < 23;
  }

  public formValues: FormValueType = {
    itemTitle: '',
    name: '',
    phone: ''
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  public scrollToShop(): void {
    this.shopElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  public addToCard(event: { title: string, target: HTMLElement }): void {
    this.scrollTo(event.target);
    this.formValues.itemTitle = event.title.toUpperCase();
  }

  public createOrder(): void {
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
