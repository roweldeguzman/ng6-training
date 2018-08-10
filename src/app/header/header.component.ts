import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../baseComponet'
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {

	constructor(public injector: Injector) { super(injector); }

	ngOnInit() {
	}

}
