import {Component, ElementRef, ViewChild} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ShopType} from "./types/shop.type";
import {FormValueType} from "./types/form-value.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('shopElement') shopElement!: ElementRef<HTMLElement>;

  public headerPhone: string = '+375 (29) 368-98-68';
  public footerInstagram: string = 'https://instagram.com';
  public showPresent: boolean = false;
  public shops: ShopType[] = [];

 public advantages: AdvantageType[] = [
   {
     title: 'Лучшие продукты',
     desc: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем\n' +
       'консерванты, ароматизаторы и красители.'
   },
   {
     title: ' Много вкусов',
     desc: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов\n' +
     'пироженок.'
   },
   {
     title: 'Бисквитное тесто',
     desc: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет\n' +
     'маргарина и дрожжей!'
   },
   {
     title: 'Честный продукт',
     desc: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили\n' +
     '22.06.2016 г.'
   },
 ];

  ngOnInit(): void {
    const titles: string[] = [
      'Макарун с малиной',
      'Макарун с манго',
      'Пирог с ванилью',
      'Пирог с фисташками'
    ];

    const prices: number[] = [1.70, 1.70, 1.70, 1.70,];

    this.shops = titles.map((title: string, index: number): ShopType => ({
      img: `${index + 1}.png`,
      title,
      price: prices[index]
    }));

    this.checkPresentTime();
  }

  private checkPresentTime(): void {
    const now = new Date();
    const hours: number = now.getHours();

    // Показываем подарок с 00:00 до 05:00
    this.showPresent = hours >= 0 && hours < 5;
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

  public addToCard(item: ShopType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.itemTitle = item.title.toUpperCase();
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
