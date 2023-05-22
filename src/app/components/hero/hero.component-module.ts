import { NgModule } from '@angular/core';
import { HeroComponent } from './hero.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [HeroComponent],
  providers: [],
  exports: [HeroComponent]
})
export class HeroComponentModule {
}
