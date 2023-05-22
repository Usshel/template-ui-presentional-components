import { NgModule } from '@angular/core';
import { RatingViewComponent } from './rating-view.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [RatingViewComponent],
  providers: [],
  exports: [RatingViewComponent]
})
export class RatingViewComponentModule {
}
