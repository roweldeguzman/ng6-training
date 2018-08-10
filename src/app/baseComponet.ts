import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class BaseComponent {
	protected http: HttpClient;
	constructor(public injector: Injector) {
		this.http = injector.get(HttpClient);
	}

	test() {
		console.log("Rowel de Guzman")
	}
}