import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ServiceService } from './services/service.service';
import { LocalStorageService } from './services/storage.service';

import { Router } from '@angular/router';

declare let $: any;
declare let window: any;

export class BaseComponent {
	protected http: HttpClient;
	protected service: ServiceService;
	protected localstorage: LocalStorageService;
    protected router: Router;
    constructor(public injector: Injector) {
		this.http = injector.get(HttpClient);
		this.service = injector.get(ServiceService);
		this.localstorage = injector.get(LocalStorageService);
        this.router = injector.get(Router)
	}
    public baseUrl = '/api';
    logout() {
        this.localstorage.remove("login");
        this.router.navigate(['/login']);
    }
	public expandNavHead() {
		$("aside, .overlay").toggleClass("active");
		if ($(".bottom-toggler").hasClass("active")) {
			$(".bottom-toggler").removeClass("active");
		}
		if ($("aside").hasClass("active")) {
			this.collapseSpandedNav(false);
		} else {
			this.collapseSpandedNav(true);
		}
	}
	/**
	 * 
	 * @param isClose boolean 
	 * 
	 * 
	 * @returns void
	 */
	public collapseSpandedNav(isClose: boolean) {
		console.log(isClose)
		$(".hamburger--spring").toggleClass("is-active");
		if (isClose) {
			$(".sub-menu.toggled").each(function (i, e) {
				$(e).find('ul').find("a.sub").css("visibility", "hidden");
				$(e).toggleClass("toggled");
				$(e).addClass("toggled-hidden");
				$(e).find('ul:first').slideToggle('fast');
			});
		} else {
			$(".toggled-hidden").each(function (i, e) {
				$(e).removeClass("toggled-hidden");
				$(e).toggleClass("toggled");
				$(e).find('ul:first').slideToggle('fast');
				$(e).find('ul:first').find("a.sub").css("visibility", "visible");
			})
		}

	}
}