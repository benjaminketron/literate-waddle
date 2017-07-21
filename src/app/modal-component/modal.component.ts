import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalComponentService } from './modal.component.service';
import * as $ from 'jquery';

@Component({
    selector: 'modal',
    template: '<ng-content></ng-content>',
    styleUrls: ['./modal.component.less']
})

export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private element: JQuery;

    constructor(private el: ElementRef, private modalComponentService: ModalComponentService) {
        this.element = $(el.nativeElement);
        console.log('loading modal component')
    }

    ngOnInit(): void {
        let modal = this;

        modal.modalComponentService.setModal(modal);

        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        //this.element.appendTo('body');

        // close modal on background click
        this.element.on('click', function (e: any) {
            var target = $(e.target);
            if (!target.closest('.modal-body').length) {
                modal.close();
            }
        });
    }

    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        this.element.remove();
    }

    // open modal
    open(): void {
        let progressBar = $('.progress .bar', this.element);
        progressBar.css('width', '0%');

        this.element.show();
        $('body').addClass('modal-open');

        progressBar.animate({ width: '45%' }, 1000);
    }

    // close modal
    close(): void {
        this.element.hide();
        $('body').removeClass('modal-open');
    }
}