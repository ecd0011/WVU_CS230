import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database'
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService{
    items:Observable<any []>;
    constructor(private db: AngularFireDatabase) {
        console.log("Setting up Firebase communication");
        this.items = this.db.list<any>('my-info').valueChanges();
    }

    public showData() {
        this.items.subscribe((data: any[]) => {
            console.log("Data received");
            for (let item of data){
                console.log;
            }
        })
    }
}