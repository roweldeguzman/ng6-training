import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core'

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
        
	}


    ngOnChanges(changes: SimpleChanges) {
        if (changes.isActive && changes.isActive.currentValue.toString().trim().length > 0) {
            this.isActive = "true";
        } else {
            this.isActive = "fasle";
        }
    }
}