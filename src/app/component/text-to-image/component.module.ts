import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TextToImageComponent } from './text-to-image.component'

@NgModule({
  imports: [ IonicModule, FormsModule, CommonModule],
  declarations: [TextToImageComponent],
  exports: [TextToImageComponent],
})
export class TextToImageComponentModule {}
