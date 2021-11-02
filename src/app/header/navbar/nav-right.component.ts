import { DOCUMENT } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { UserInfo } from "src/app/body/user-info.model";
import { UserInfoService } from "src/app/body/user-info.service";
import { DatabaseService } from "src/app/database.service";

@Component({
    selector: 'app-nav-right',
    templateUrl: 'nav-right.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavRightComponent{
    constructor(
        private infoService:UserInfoService, 
        @Inject(DOCUMENT) private page: Document, 
        private dbService:DatabaseService
        ){
            this.dbService.showData();
        }

    onEditUserInfo(data:UserInfo) {
        console.log(data);

        this.infoService.editUserInfo(data).subscribe(data => {
            console.log(data);
            this.page.defaultView!.location.reload();
        });
    }
}