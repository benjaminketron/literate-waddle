import { Injectable } from '@angular/core';
import { ModalComponent } from './modal.component';

@Injectable()
export class ModalComponentService {
    private modal: ModalComponent;

    setModal(modal: ModalComponent) {
        this.modal = modal;
    }

    openModal() {
        if (this.modal != null) {
            this.modal.open();
        }
    }

    closeModal() {
        if (this.modal != null) {
            this.modal.close();
        }
    }
}