import { Component, Input } from "@angular/core";
import { Tile } from "./tile.model";
import { mock_tiles } from "./mock-tiles";

@Component({
    selector: 'app-tile-layout',
    templateUrl: 'tile-layout.component.html',
    styleUrls: ['./tile-layout.component.css']
})
export class TileLayoutComponent{
    label = "Sign up";

    tiles: Tile[] = [];

    constructor() {
        for (var tile of mock_tiles) {
            this.tiles.push(new Tile(tile))
        }
    }
}