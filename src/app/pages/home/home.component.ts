import { Component } from '@angular/core';
import { CardInterface } from 'src/app/interfaces/card.interface';
import { CardsMock } from 'src/app/mock/cards.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public readonly bigCard: CardInterface = CardsMock[0];

  public readonly smallCards: CardInterface[] = CardsMock.slice(1, 4);
}
