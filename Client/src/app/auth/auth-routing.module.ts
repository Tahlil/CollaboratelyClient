import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpPage } from './signup.page';
import { SignInPage } from './signin.page';

const routes: Routes = [
  { path: 'signin', component: SignInPage },
  { path: 'signup', component: SignUpPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
