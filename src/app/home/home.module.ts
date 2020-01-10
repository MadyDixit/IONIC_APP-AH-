import { DetailPage } from './../pages/detail/detail.page';
import { AddAccountPage } from './../pages/add-account/add-account.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'add-account',
        component: AddAccountPage
      },
      {
        path: 'acc-detail',
        component: DetailPage,
      }
    ])
  ],
  declarations: [HomePage, AddAccountPage, DetailPage]
})
export class HomePageModule { }
