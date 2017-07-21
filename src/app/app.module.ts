import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal-component/modal.component';
import { ModalComponentService } from './modal-component/modal.component.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ModalComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
