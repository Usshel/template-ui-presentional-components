import { ChangeDetectionStrategy, Component, Input, OnChanges, Output, SimpleChange, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ReadMorePanelViewModel } from './read-more-panel.view-model';

@Component({
  selector: 'read-more-panel',
  styleUrls: ['./read-more-panel.component.scss'],
  template: `
  <section *ngIf="dummy$ | async as readMore">
    <p>{{mainText}}</p>
    <button *ngIf="isOpen$ | async" (click)="Open()">{{readMore.closedLabel}}</button>
   
      <button *ngIf="!(isOpen$ | async)" (click)="Open()">{{readMore.openLabel}}</button>
    
    <p *ngIf="isOpen$ | async">{{readMoreText}}</p>
  </section>`,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadMorePanelComponent implements OnChanges {



  @Input() mainText: string ='asd';
  @Input() readMoreText: string ='more text';
  @Input() openLabel: string = 'Read More';
  @Input() closedLabel: string = 'Read less';

  private _dummyState: BehaviorSubject<ReadMorePanelViewModel> = new BehaviorSubject<ReadMorePanelViewModel>({
    mainText: '',
    readMoreText: '',
    openLabel: '',
    closedLabel: ''
  })
  public dummy$ : Observable<ReadMorePanelViewModel> = this._dummyState.asObservable()

//jednak jedna lejbelka
  private _labelSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.openLabel)
  public label$ : Observable<string> = this._labelSubject.asObservable()

  private _isOpenStateSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public isOpen$: Observable<boolean> = this._isOpenStateSubject.asObservable().pipe(
    shareReplay(1)
  );
  

  ngOnChanges(changes: SimpleChanges) {
    if(changes['mainText'] && changes['mainText'].currentValue){
      this.mainText = changes['mainText'].currentValue 
    }
    if(changes['readMoreText'] && changes['readMoreText'].currentValue){
      this.readMoreText = changes['readMoreText'].currentValue 
    }
    if(changes['openLabel'] && changes['openLabel'].currentValue){
      this.openLabel = changes['openLabel'].currentValue 
    }
    if(changes['closedLabel'] && changes['closedLabel'].currentValue){
      this.closedLabel = changes['closedLabel'].currentValue 
    }
    this._dummyState.next({
      mainText: this.mainText,
      readMoreText: this.readMoreText,
      openLabel: this.openLabel,
      closedLabel: this.closedLabel
    })

  }

  // readMore$: Observable<ReadMorePanelViewModel> = of(
  //   {
  //     mainText: this.mainText,
  //     readMoreText: this.readMoreText,
  //   }
  // )

  // private _labelStateSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.closedLabel);
  // public label$: Observable<string> = this._labelStateSubject.asObservable();

  //change name
//   readMoreViewModel$ = combineLatest([
//     this.isOpen$,
//     this.readMore$,
//     this.label$
//   ]).pipe(
//     map(([isOpen, readMore, labelObs]) => ({
//       mainText: readMore.mainText,
//       readMoreText: readMore.readMoreText,
//       label: labelObs,
//       isOpen: isOpen
//     })
//     ))

  Open(): void {
    console.log(this._isOpenStateSubject.getValue())
    this._isOpenStateSubject.getValue()
      ? this._isOpenStateSubject.next(false)
      : this._isOpenStateSubject.next(true)
  }
  

// }

}
  //   @Input() mainText?: string;
  //   @Input() readMoreText?: string;
  //   @Input() openLabel: string = 'Read more';
  //   @Input() closedLabel: string = 'Read less';




  //   private _showMeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  //   public showMe$: Observable<boolean> = this._showMeSubject.asObservable();

  //   private _buttonTextSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.openLabel);
  //   public buttonText$: Observable<string> = this._buttonTextSubject.asObservable();

  //   ngOnChanges(changes: SimpleChanges) {
  //     this._showMeSubject.getValue() ? this._buttonTextSubject.next(this.closedLabel) : this._buttonTextSubject.next(this.openLabel)

  //   }

  //   toggleVisibility() {
  //     this._showMeSubject.getValue() ? this._showMeSubject.next(false) : this._showMeSubject.next(true)
  //     this._showMeSubject.getValue() ? this._buttonTextSubject.next(this.closedLabel) : this._buttonTextSubject.next(this.openLabel)
  //   }

  // <p>{{this.mainText}}</p>
  // <button (click)="toggleVisibility()">{{buttonText$ | async}}</button>
  // <p *ngIf="showMe$ | async">{{this.readMoreText}}</p>
  // </section>

  // }
  
// }


