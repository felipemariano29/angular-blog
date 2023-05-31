import { Component } from '@angular/core';
import { CardInterface } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public readonly bigCard: CardInterface = {
    image: 'https://placehold.co/600x400',
    title: 'Lorem, ipsum dolor.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore error doloremque ex numquam, in quas incidunt similique praesentium exercitationem eum.',
  };

  public readonly smallCards: CardInterface[] = [
    {
      image: 'https://placehold.co/600x400',
      title: 'Lorem, ipsum 1.',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore error doloremque ex numquam, in quas incidunt similique praesentium exercitationem eum.',
    },
    {
      image: 'https://placehold.co/600x400',
      title: 'Lorem, ipsum 2.',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore error doloremque ex numquam, in quas incidunt similique praesentium exercitationem eum.',
    },
    {
      image: 'https://placehold.co/600x400',
      title: 'Lorem, ipsum 3.',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore error doloremque ex numquam, in quas incidunt similique praesentium exercitationem eum.',
    },
  ];
}
