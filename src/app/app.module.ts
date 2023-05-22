import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { RatingViewComponentModule } from './components/rating-view/rating-view.component-module';
import { ReadMorePanelComponentModule } from './components/read-more-panel/read-more-panel.component-module';
import { CommonModule } from '@angular/common';
import { AddressFormComponentModule } from './components/address-form/address-form.component-module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    RatingViewComponentModule,
    ReadMorePanelComponentModule,
    CommonModule,
    AddressFormComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
