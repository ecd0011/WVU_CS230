import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-btn',
    templateUrl: 'btn.component.html'
})
export class BTNComponent{
    @Input()
    buttonLabel!: string;
}