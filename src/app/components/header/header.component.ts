import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'header',
  styleUrls: ['./header.component.scss'],
  template: `
  <h1>Hello I am a header</h1>
  <ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
}
