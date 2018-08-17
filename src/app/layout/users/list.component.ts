import { Component, OnInit, Injector, ViewChild, ViewContainerRef } from '@angular/core';

import { BaseComponent } from '../../baseComponet'
import { HttpParams } from '@angular/common/http';
@Component({
    selector: "user-list",
    templateUrl: './list.component.html'
})

export class UserList extends BaseComponent implements OnInit{
    constructor(public injector: Injector) { super(injector); }
    ngOnInit() {
        this.getData(1)
    }
    @ViewChild('paginate', { read: ViewContainerRef }) container: ViewContainerRef;
    userList = [];
    getData(page) {
        this.http.get(this.baseUrl + "/index.php", {
            params: new HttpParams().set("page", page)
        }).subscribe(
            (data: any) => {
                if (data.statusCode == 200){
                    this.userList = data.devMessage.data;

                    if (data.devMessage.pageInfo.noOfPage > 0) {
                        this.builder.createComponent(
                            this.service.paginate(data.devMessage.pageInfo, page, "getData"),
                            UserList,
                            this.container
                        );
                    }
                }
            },
            (error: any) => {
                
            }
        )
    }
}