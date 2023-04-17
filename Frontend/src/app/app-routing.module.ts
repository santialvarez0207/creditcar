import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SeekerComponent } from './seeker/seeker.component';
import { RegisterComponent} from './register/register.component';
import { ProductComponent } from './product/product.component';
import { FinancingComponent } from './financing/financing.component';
import { FormComponent } from './form/form.component';
import { AnnounceComponent } from './announce/announce.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path: 'seeker', component: SeekerComponent},
  {path:'Register',component:RegisterComponent},
  {path: 'product', component: ProductComponent},
  {path: 'financing', component: FinancingComponent},
  {path: 'form', component: FormComponent},
  {path: 'announce', component: AnnounceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
