import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'modal',
    template: '<ng-content></ng-content>'
})

export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private element: JQuery;

    constructor(private el: ElementRef) {
        this.element = $(el.nativeElement);
    }

    ngOnInit(): void {
        let modal = this;

        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        this.element.appendTo('body');

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
        this.element.show();
        $('body').addClass('modal-open');
    }

    // close modal
    close(): void {
        this.element.hide();
        $('body').removeClass('modal-open');
    }
}