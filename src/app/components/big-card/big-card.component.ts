import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CardInterface } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
  @Input()
  bigCard: CardInterface = {
    id: 0,
    image: '',
    title: '',
    description: '',
  };
}
