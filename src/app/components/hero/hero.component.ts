import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hero',
  styleUrls: ['./hero.component.scss'],
  templateUrl: './hero.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  @Input() title?: string;
  @Input() imageUrl?: string;
}
