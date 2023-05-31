import { Component, Input } from '@angular/core';
import { CardInterface } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
  @Input()
  bigCard: CardInterface = {
    image: '',
    title: '',
    description: '',
  };
}
