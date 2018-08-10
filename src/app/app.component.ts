import { Component, Injector } from '@angular/core';
import { BaseComponent } from './baseComponet'

@Component({
	selector: 'app-root',
	template: '<router-outlet></router-outlet>',
	styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent{
	constructor(public injector: Injector) { 
		super(injector);
		this.test()
	}
	title = 'training';
	testValue = "Rowel de Guzman";

	ChangeVal() {
		this.testValue = "rowel.deguzman@gmail.com"+Math.random();
	}
}
