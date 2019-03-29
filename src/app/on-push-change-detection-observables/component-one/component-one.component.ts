// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';
import {Subject} from 'rxjs';

@Component({
    selector: 'cmp-one',
    template: `
        <a class="on-push">Cmp1</a>

        <ul>
            <li>
                <cmp-two [model]="model"></cmp-two>
            </li>
            <li>
                <cmp-three [model]="model"></cmp-three>
            </li>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentOne implements AfterViewChecked {

    @Input() model: Subject<any>;

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngAfterViewChecked() {
        toggleClass(this.el, this.zone);
    }

}
