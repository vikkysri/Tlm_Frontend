import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ContactusFormComponent } from './contactus-form/contactus-form.component';
import { NewarrivalsComponent } from './newarrivals/newarrivals.component';
import { OurproductsinmainpageComponent } from './ourproductsinmainpage/ourproductsinmainpage.component';
import { CustomerfeedbackComponent } from './customerfeedback/customerfeedback.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ContactusFormComponent,
    NewarrivalsComponent,
    OurproductsinmainpageComponent,
    CustomerfeedbackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
