import { Component, OnInit } from '@angular/core';
import {AdvantageType} from "../../types/advantage.type";

@Component({
  selector: 'advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent implements OnInit {

  advantages: AdvantageType[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
