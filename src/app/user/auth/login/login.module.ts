import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginComponent } from './login.component';
//Imports
import { TabsPageModule } from '../../../tabs/tabs.module';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, TabsPageModule
    
],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginComponentModule {}
