import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'

import { NgModel } from '@angular/forms';
@Component({
	selector: "app-input",
	templateUrl: './input.component.html'
})

export class AppInput implements OnInit {
	constructor() { }
	@Input() type: any;
	@Input() model: NgModel;
	@Input() isActive: string;
	@Input() isFloat: boolean;
	@Input() floatTxt: string;
	@Input() placeholder: string;
    @Input() classes: string;
    @Input() id: string;
    @Output() change = new EventEmitter<string>();

	ngOnInit() {
        this.isActive = typeof this.isActive
	}
}