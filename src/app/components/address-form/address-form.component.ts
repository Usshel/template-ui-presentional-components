import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { CountriesViewModel } from './countries.view-model';

@Component({
  selector: 'address-form',
  styleUrls: ['./address-form.component.scss'],
  templateUrl: './address-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressFormComponent {

  @Input() form: FormGroup = new FormGroup(
    ({
      street: new FormControl(), 
      city: new FormControl(), 
      countryId: new FormControl() 
    })
  )
    readonly countriesWithIds: Observable<CountriesViewModel[]> = of([{
      id: '1',
      name: 'Poland'
    },
    {
      id: '2',
      name: 'USA'
    }])



}
