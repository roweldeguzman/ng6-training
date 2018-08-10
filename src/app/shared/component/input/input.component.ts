import { Component, Input } from '@angular/core'


@Component({
	selector: "app-input",
	template: `
		<div class="rg-line {{isActive}}">
			<input type="{{type}}" value="{{value}}" class="form-control input-sm"/>
			<div class="rg-input-underline">
				<span class="rg-input-ripple"></span>
			</div>
		</div>
		<label *ngIf="isFloat">{{floatTxt}}</label>
	`
})

export class AppInput {
	@Input() type:any;
	@Input() value: any;
	@Input() isActive: string;
	@Input() isFloat: boolean;
	@Input() floatTxt: string;
}