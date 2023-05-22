import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { CardViewModel } from './card.view-model';

@Component({
  selector: 'card',
  styleUrls: ['./card.component.scss'],
  template: `<h2>{{card.title}}</h2><p>{{card.description}}</p>`,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() card:CardViewModel = {title: '', description: ''}
}
