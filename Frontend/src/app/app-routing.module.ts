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
import { ProfileDealerComponent } from './profile-dealer/profile-dealer.component';

import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { LoginDealerComponent } from './login-dealer/login-dealer.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path: 'seeker', component: SeekerComponent},
  {path:'register',component:RegisterComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'financing', component: FinancingComponent},
  {path: 'form', component: FormComponent},
  {path: 'announce', component: AnnounceComponent},
 {path:'profile-dealer/:id',component:ProfileDealerComponent},
  {path: 'perfil-user/:id', component: PerfilUserComponent},
  {path: 'login-dealer', component: LoginDealerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
