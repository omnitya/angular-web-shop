import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path : '', component : HomeComponent, canActivate:[AuthGuard]},
  {path : 'about', component : AboutComponent},
  {path : 'contact', component : ContactComponent},
  {
    path : 'signup', component : UserComponent,
    children : [{path : '', component : SignUpComponent}]
  },
  {
    path : 'login', component : UserComponent,
    children : [{path : '', component : LoginComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
