import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';

// Login Imports
import { LoginComponentModule } from './login/login.module';
// Signup Imports
import { SignupComponentModule } from './signup/signup.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    LoginComponentModule,
    SignupComponentModule
  ],
  declarations: [AuthPage],
  exports: [RouterModule]
})
export class AuthPageModule {}
