import { Component, Input } from '@angular/core';
import { CardInterface } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent {
  @Input()
  smallCard: CardInterface = {
    id: 0,
    image: '',
    title: '',
    description: '',
  };
}
