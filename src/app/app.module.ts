import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FilingTypeComponent } from './filing-type/filing-type.component';
import { MonthComponent } from './month/month.component';
import { YearComponent } from './year/year.component';
import { SaleAmountComponent } from './sale-amount/sale-amount.component';
import { TaxAmountComponent } from './tax-amount/tax-amount.component';
import { SurchargeComponent } from './surcharge/surcharge.component';
import { PenaltyComponent } from './penalty/penalty.component';
import { TotalAmountComponent } from './total-amount/total-amount.component';
import { FormsModule } from '@angular/forms';
import { ConfirmPageComponent } from './confirm-page/confirm-page.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    FilingTypeComponent,
    MonthComponent,
    YearComponent,
    SaleAmountComponent,
    TaxAmountComponent,
    SurchargeComponent,
    PenaltyComponent,
    TotalAmountComponent,
    ConfirmPageComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
