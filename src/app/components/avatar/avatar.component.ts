import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'avatar',
  styleUrls: ['./avatar.component.scss'],
  template: ' <img [src]="iamgeUrl" [alt]="text"> <p>{{text}}</p>',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
  @Input() iamgeUrl:string = '';
  @Input() text:string = ''
}
