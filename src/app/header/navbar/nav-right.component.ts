import { DOCUMENT } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { UserInfo } from "src/app/body/user-info.model";
import { UserInfoService } from "src/app/body/user-info.service";
import { DatabaseService } from "src/app/database.service";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./authResponse";

@Component({
    selector: 'app-nav-right',
    templateUrl: 'nav-right.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavRightComponent {
    public buttonClicked!: string;
    private authObservable!: Observable<AuthResponse>;

    constructor(
        private infoService: UserInfoService,
        @Inject(DOCUMENT) private page: Document,
        private dbService: DatabaseService,
        private authService: AuthService
    ) {
        this.dbService.showData();
    }

    onEditUserInfo(data: UserInfo) {
        console.log(data);

        this.infoService.editUserInfo(data).subscribe(data => {
            console.log(data);
            this.page.defaultView!.location.reload();
        });
    }

    public onSubmit(data: NgForm) {
        console.log("Button clicked");
        console.log(data.value);

        if (this.buttonClicked == "SignUp") {
            this.authObservable = this.authService.signup(data.value.Email, data.value.Password);
        }
        else {
            this.authObservable = this.authService.login(data.value.Email, data.value.Password);
        }

        this.authObservable.subscribe(
            (data: AuthResponse) => {
                console.log(data);
            },
            error => {
                console.log(error.error);
            }
        );

        console.log("You have now entered your account information")
        data.resetForm();
    }
}