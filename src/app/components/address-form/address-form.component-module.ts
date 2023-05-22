import { NgModule } from '@angular/core';
import { AddressFormComponent } from './address-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [AddressFormComponent],
  providers: [],
  exports: [AddressFormComponent]
})
export class AddressFormComponentModule {
}
