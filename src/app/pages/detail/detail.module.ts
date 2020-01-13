import { UpdateComponent } from './update/update.component';
import { HomePageModule } from './../../home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
  ],
  declarations: [DetailPage, UpdateComponent]
})
export class DetailPageModule {


}
