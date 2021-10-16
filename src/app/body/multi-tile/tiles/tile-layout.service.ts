import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tile } from "./tile.model";

@Injectable({
    providedIn: 'root'
})

export class TileLayoutService {
    private baseUrl: string = 'https://chegg-app-cf77c-default-rtdb.firebaseio.com/'
    private tileEndpoint: string = 'tiles/';

    constructor(private http: HttpClient) {
    }

    // Param num: allows for loop to return each end title in titles array
    // Prevents issue with return tile array and trying to subscribe
    getTiles(num: number) {
        var titles = ['homework.json', 'exam.json', 'topic.json', 'writing.json'];

        return this.http.get<Tile>(this.baseUrl + this.tileEndpoint + titles[num]);
    }

}