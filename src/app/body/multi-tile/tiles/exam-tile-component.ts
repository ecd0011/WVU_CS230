import { Component } from "@angular/core";

@Component({
    selector: 'app-exam-tile',
    templateUrl: 'exam-tile.component.html'
})
export class ExamTileComponent{
    img = "/assets/images/tiles/tile-exams.png"
    largeTxt = "Exam prep & practice"
    smallTxt = "Get ready for test day with 500+ million flashcards or review with practice exams."
    disclaimer = "3"
}