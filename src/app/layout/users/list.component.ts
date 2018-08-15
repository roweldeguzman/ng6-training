import { Component, OnInit, Injector } from '@angular/core';

import { BaseComponent } from '../../baseComponet'
@Component({
    selector: "[user-list]",
    templateUrl: './list.component.html'
})

export class UserList extends BaseComponent implements OnInit{
    constructor(public injector: Injector) { super(injector); }
    ngOnInit() {
        this.getData()
    }

    userList = [];
    getData() {
        this.http.get(this.baseUrl + "/index.php", {
            
        }).subscribe(
            (data: any) => {
                if (data.statusCode == 200){
                    this.userList = data.devMessage.data;  
                } else {
                    
                }

                console.log(this.userList)
            },
            (error: any) => {
                
            }
        )
    }
}