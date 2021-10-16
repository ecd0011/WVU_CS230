import { Component, Input, OnInit } from "@angular/core";
import { Tile } from "./tile.model";
import { TileLayoutService } from "./tile-layout.service";

@Component({
    selector: 'app-tile-layout',
    templateUrl: 'tile-layout.component.html',
    styleUrls: ['./tile-layout.component.css']
})

export class TileLayoutComponent implements OnInit {
    label = "Sign up";
    tilesArray: Tile[] = [];


    constructor(private tileLayoutService: TileLayoutService) {
    }

    ngOnInit(): void {
        console.log("Registering showTile as a subscriber");
        this.showTile();
    }

    showTile() {
        // Looping through all tiles needing to be called and storing them in the tilesArray
        for (let num = 0; num <= 3; num++) {
            this.tileLayoutService.getTiles(num).subscribe((data: Tile) => {
                console.log(data);
                this.tilesArray[num] = data;
            });
        }
    }
}