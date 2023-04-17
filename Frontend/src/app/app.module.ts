import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SeekerComponent } from './seeker/seeker.component';
import { ProductComponent } from './product/product.component';
import { FinancingComponent } from './financing/financing.component';
import { FormComponent } from './form/form.component';
import { AnnounceComponent } from './announce/announce.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SeekerComponent,
    ProductComponent,
    FinancingComponent,
    FormComponent,
    AnnounceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
