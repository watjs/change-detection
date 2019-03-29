// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {Component} from '@angular/core';
import {ToggleStateService} from '../toggle-state.service';
import {Subject} from 'rxjs';

@Component({
    selector: 'on-push-cd',
    template: `
        <h2>OnPush Change Detection</h2>

        <div>
            <button class="trigger" (click)="null">Trigger Change Detection</button>
        </div>
        <div class="tree">
            <ul>
                <li>
                    <cmp-one></cmp-one>
                </li>
            </ul>
        </div>
        <div style="margin-bottom: 5em; clear: both;"></div>
    `
})
export class OnPushChangeDetectionComponent {

    notifier: Subject<any>;

    constructor(private toggleStateService: ToggleStateService) {
    }

    notifyInterval(runInterval) {
        this.notifier.next(runInterval);
    }

}
