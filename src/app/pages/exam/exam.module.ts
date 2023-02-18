import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamPageRoutingModule } from './exam-routing.module';

import { ExamPage } from './exam.page';

import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamPageRoutingModule,
    PdfViewerModule 
  ],
  declarations: [ExamPage]
})
export class ExamPageModule {}
