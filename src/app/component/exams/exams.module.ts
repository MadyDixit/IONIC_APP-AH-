import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ExamsComponent } from './exams.component';



@NgModule({
  declarations: [ExamsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ExamsComponent],
})
export class ExamsModule { }
