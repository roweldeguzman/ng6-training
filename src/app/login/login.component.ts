import { Component, OnInit, Injector } from '@angular/core';

import { BaseComponent } from '../baseComponet'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {
    constructor(public injector: Injector) {
        super(injector)
    }

    ngOnInit() {
        if (this.localstorage.isExist("login")) {
            this.router.navigate(["/home"]);
        }
    }

    login() {
        localStorage.setItem("login", "1");
        this.router.navigate(['/home'])
    }
}
