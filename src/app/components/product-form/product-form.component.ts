import { ChangeDetectionStrategy, Component, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest, map, of } from 'rxjs';
import { ProductFormViewModel } from './product-form.view-model';
import { SubmitLabelsViewModel } from '../submit-labels/submit-labels.view-model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  // private _model: ProductFormViewModel | undefined = undefined;

  
  // private _isDefinedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // public isDefined$: Observable<boolean> = this._isDefinedSubject.asObservable();
    private _stateLabelSubject: BehaviorSubject<string> = new BehaviorSubject<string>('Create');
    public stateLabel$: Observable<string> = this._stateLabelSubject.asObservable();

  @Output() submitted: EventEmitter<ProductFormViewModel> = new EventEmitter<ProductFormViewModel>();

  @Input() set model(value: ProductFormViewModel | undefined) {
      // mozna wykonyac side effecty. Robic to co chcesz aby sie wydazylo podczas zmiany.
    this._stateLabelSubject.next(value !== undefined ? 'Update' : 'Create');
    if(value !== undefined) {                 
      this.form.patchValue({id: value.id, name: value.name, price: value.price})
    }
   

    //subject z labelem
  }

  public form: FormGroup = new FormGroup(
    ({
      id: new FormControl(),      //default default value is null what may cuases bugs
      name: new FormControl(),
      price: new FormControl()
    })
  )

 readonly submitLabels$: Observable<SubmitLabelsViewModel> = of(
    {labelUpdate:'Update', labelCreate:'Create'}
 )

  onProductFormSubmitted(): void {
    this.submitted.emit(this.form.getRawValue())
  }

  

//  readonly labelOfState: Observable<string> = combineLatest([
//   this.isDefined$,
//   this.submitLabels$
//  ]).pipe(
//   map(([isDefined, labels]) => 
//     isDefined ? labels.labelUpdate : labels.labelCreate
//   )
//  )

  // ChecksIfModelIsDefined(value: ProductFormViewModel | undefined ): void {
  //   this._isDefinedSubject.next(value !== undefined ? true : false);
  // }

  // UpdateFormValues(value: ProductFormViewModel ): void{
  //   this.form.patchValue({id: value.id, name: value.name, price: value.price} )
  // }


}


