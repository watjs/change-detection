// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {AfterViewChecked, Component, ElementRef, Input, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';
import {Subject} from 'rxjs';

@Component({
    selector: 'cmp-one',
    template: `
        <a>Cmp1</a>

        <ul>
            <li>
                <cmp-two [notifier]="notifier"></cmp-two>
            </li>
            <li>
                <cmp-three></cmp-three>
            </li>
        </ul>
    `
})
export class ComponentOne implements AfterViewChecked {

    @Input() notifier: Subject<any>;

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

}
