import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../../baseComponet'


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {

	constructor(public injector: Injector) { super(injector); }
    testValue = "asdasdad";
	ngOnInit() {
	}
    getValue () {
        console.log(this.testValue)
    }
	changeVal() {
        console.log(document.getElementById("sampleID"))
        this.testValue = "rowel.deguzman@gmail.com" + Math.random();
	}
}
