// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {Component} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
    selector: 'on-push-cd-observables',
    template: `
        <h2>OnPush Change Detection (Observables)</h2>
        <div>
            <button class="trigger" (click)="null">Trigger Change Detection</button>
            <button class="trigger" (click)="emitAndTriggerChangeDetection()">Push to Cmp17</button>
        </div>
        <div class="tree">
            <ul>
                <li>
                    <cmp-one [model]="model"></cmp-one>
                </li>
            </ul>
        </div>
        <div style="margin-bottom: 5em; clear: both;"></div>
    `
})
export class OnPushChangeDetectionObservablesComponent {

    model: Subject<any> = new Subject();
    notifier: Subject<any>;

    emitAndTriggerChangeDetection() {
        this.model.next(null);
    }

}
