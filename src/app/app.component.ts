import { Component } from '@angular/core';
import { ModalComponentService } from './modal-component/modal.component.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'My Account';

  constructor(private modalComponentService: ModalComponentService) {

  }

  openModal(id: string){
    this.modalComponentService.openModal();
  }

  closeModal(id: string){
    this.modalComponentService.closeModal();
  }
}
