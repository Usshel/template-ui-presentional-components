import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'components-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'components';
 

  onRatingClicked($event: number) {}

  data = {
    street: 'my street',
    city: 'Warsaw',
    countryId: 1,
  };

  form = new FormGroup({
    street: new FormControl(this.data.street),
    city: new FormControl(this.data.city),
    countryId: new FormControl(this.data.countryId),
  });

}
