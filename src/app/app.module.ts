import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TripCalculatorComponent } from "./components/trip-calculator/trip-calculator.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CurrencyPipe } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    TripCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
