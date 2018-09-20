import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ContactusFormComponent } from './contactus-form/contactus-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ContactusFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
