import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-search',
    templateUrl: 'search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent{
    @Input()
    searchClass: string = "navbar navbar-light bg-white mb-3 pe-2"
    @Input()
    searchWidth: string = "width: 530px;"
    @Input()
    searchText: string = "Find books, solutions, and more..."
}