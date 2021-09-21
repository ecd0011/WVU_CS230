import { Component } from "@angular/core";

@Component({
    selector: 'app-study-hero',
    templateUrl: 'study-hero.component.html',
    styleUrls: ['./study-hero.component.css']
})
export class StudyHeroComponent{
    class = "navbar navbar-light bg-transparent mb-3 pe-2"
    newWidth = "width: 587px;"
    newSearchTxt = "Find solutions to your homework"
}