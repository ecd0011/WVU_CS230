import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-btn',
    templateUrl: 'btn.component.html',
    styleUrls: ['./btn.component.css']
})
export class BTNComponent{
    @Input()
    buttonLabel!: string;
}