import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-tile',
    templateUrl: 'tile.component.html'
})
export class TileComponent{
    @Input()
    tileImage!: string;

    @Input()
    tileLrgtxt!: string;

    @Input()
    tileSmltxt!: string;

    @Input()
    tileDsclmr!: string;

    @Input()
    tileBrk: string = "false";
}