import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SeekerComponent } from './seeker/seeker.component';
import { ProductComponent } from './product/product.component';
import { FinancingComponent } from './financing/financing.component';
import { FormComponent } from './form/form.component';
import { AnnounceComponent } from './announce/announce.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileDealerComponent } from './profile-dealer/profile-dealer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { RegisterComponent } from './register/register.component';
import { LoginDealerComponent } from './login-dealer/login-dealer.component';
import { PerfilAdministradorComponent } from './perfil-administrador/perfil-administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SeekerComponent,
    ProductComponent,
    FinancingComponent,
    FormComponent,
    AnnounceComponent,
    ProfileDealerComponent,
    PerfilUserComponent,
    RegisterComponent,
    LoginDealerComponent,
    PerfilAdministradorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
