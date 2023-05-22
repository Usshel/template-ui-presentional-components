import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rating-view',
  template: `
    <div class="rating">
      <i *ngFor="let star of stars" 
         class="{{ getStarClass(star) }}" 
         (click)="onStarClick(star)">
      </i>
    </div>
  `,
})
export class RatingViewComponent {
  private _maxStars: number = 0
  @Input() set max(value: number){
    this._maxStars = value
    this.stars= Array.from({ length: this._maxStars }, (_, i) => i + 1);
  }
  @Input() value!: number;
  @Output() clicked = new EventEmitter<number>();
  stars: number[] = [];

  
  
  getStarClass(star: number) {
    if (star <= Math.floor(this._maxStars)) {
      return 'icon-star';
    } else if (star === Math.ceil(this._maxStars)) {
      return 'icon-star-half-empty';
    } else {
      return 'icon-star-empty';
    }
  }

  onStarClick(star: number) {
    this._maxStars = star;
    this.clicked.emit(star);

  }
}

// icon-star-empty
// icon-star-half-empty
// icon-star