import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlocksComponent } from './blocks/blocks.component';
import { CardsComponent } from './cards/cards.component';
import { FormsComponent } from './forms/forms.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    BlocksComponent,
    CardsComponent,
    FormsComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
