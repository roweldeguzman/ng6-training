import { Component, Input, OnInit } from '@angular/core'
import { NgModel } from '@angular/forms';
@Component({
	selector: "app-input",
	template: `
		<div class="rg-line {{isActive}}">
			<input [ngModel]="model" [type]="type" [value]="value"  [placeholder]="placeholder" />
			<div class="rg-input-underline">
				<span class="rg-input-ripple"></span>
			</div>
		</div>
		<label *ngIf="isFloat">{{floatTxt}}</label>
	`
})

export class AppInput implements OnInit{
	
	@Input() type: any;
	@Input() model: NgModel;
	@Input() value: any;
	@Input() isActive: string;
	@Input() isFloat: boolean;
	@Input() floatTxt: string;
	@Input() placeholder: string;

	ngOnInit() {
		console.log(this.model)
	}
}