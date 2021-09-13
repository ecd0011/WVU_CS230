import { Component } from "@angular/core";

@Component({
    selector: 'app-writing-tile',
    templateUrl: 'writing-tile.component.html'
})
export class WritingTileComponent{
    img = "/assets/images/tiles/tile-writing.png"
    largeTxt = "Writing & citations"
    smallTxt = "Strengthen your writing with plagiarism checks, expert proofreading & instant citations."
}