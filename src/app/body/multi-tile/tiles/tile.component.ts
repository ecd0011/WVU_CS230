import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-tile',
    templateUrl: 'tile.component.html',
    styleUrls: ['./tile.component.css']
})
export class TileComponent{
    @Input()
    image!: string;

    @Input()
    lrgTxt!: string;

    @Input()
    smlTxt!: string;

    @Input()
    disclaimer!: string;

    @Input()
    brk!: string;
}