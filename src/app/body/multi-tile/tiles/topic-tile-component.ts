import { Component } from "@angular/core";

@Component({
    selector: 'app-topic-tile',
    templateUrl: 'topic-tile.component.html'
})
export class TopicTileComponent{
    img = "/assets/images/tiles/tile-topics.png"
    largeTxt = "Understand a topic"
    smallTxt = "Simplify the toughest concepts with digestible topic breakdowns & videos."
    disclaimer = "4"
}