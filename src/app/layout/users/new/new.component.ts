import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../../../baseComponet';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent extends BaseComponent implements OnInit {

    constructor(public injector: Injector, private route: ActivatedRoute) { super(injector) }
    user = {
        firstName: "",
        lastName: "",
        email: ""
    }
    ngOnInit() {
        setTimeout(()=>{
            this.route.params.subscribe(params => {
                this.user.firstName = params["fname"];
                this.user.lastName = params["lname"];
                this.user.email = params["email"]
            });
        }, 10)
        
    }

    save() {
        this.http.post(this.baseUrl + "/index.php", {
            "firstName": this.user.firstName,
            "lastName": this.user.lastName,
            "email": this.user.email
        }).subscribe(
            (data: any) => {
                if (data.statusCode == 200){
                    this.user.firstName = "";
                    this.user.lastName = "";
                    this.user.email = "";
                    this.router.navigate(["/users/list"])
                } else {
                    alert(data.devMessage);
                }
            },
            (error: any) => {}
        )
    }
}
