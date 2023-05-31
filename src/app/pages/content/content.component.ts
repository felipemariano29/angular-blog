import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardInterface } from 'src/app/interfaces/card.interface';
import { CardsMock } from 'src/app/mock/cards.mock';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let selectedId: number = 0;

    this.route.paramMap.subscribe((param) => {
      selectedId = parseInt(param.get('id')!);
    });

    const selectedCard = CardsMock.filter(
      (card: CardInterface) => card.id === selectedId
    )[0];

    this.contentCard = selectedCard;
  }

  contentCard: CardInterface = {
    id: 0,
    image: '',
    title: '',
    description: '',
  };
}
