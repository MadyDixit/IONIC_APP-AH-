import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupComponent } from './signup.component';

//Imports
import { LoginComponentModule } from '../login/login.module';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, LoginComponentModule],
  declarations: [SignupComponent],
  exports: [SignupComponent]
})
export class SignupComponentModule {}
