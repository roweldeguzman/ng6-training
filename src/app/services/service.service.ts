import { Injectable } from '@angular/core';

declare let $: any;
@Injectable()
export class ServiceService {
	constructor() { }
    public paginate(data, pager, method) {
        let pageHtml = '',
            pmin = 0,
            pmax = 0,
            adjacents = 1;

        pageHtml += '<ul id="pagination" class="pagination pagination-sm" style="margin: 0; padding: 0;">';
        /*pageHtml += '<li *ngIf="winWidth >= 767"><span>Page '+data.currentPage+' of '+data.noOfPage+'</span></li>';*/
        if (data.currentPage == '1') {
            pageHtml += '<li class="disabled"><a><i class="zmdi zmdi-chevron-left zmdi-hc-fw"></i> Previous</a></li>';
        }
        else {
            pageHtml += '<li><a style="cursor: pointer;" (click)="parent.' + method + '(' + data.prevPage + ',$event)"><i class="zmdi zmdi-chevron-left zmdi-hc-fw"></i> Previous</a></li>';
        }
        if (pager > (adjacents + 1)) {
            pageHtml += '<li><a style="cursor: pointer;" (click)="parent.' + method + '(1,$event)">1</a></li>';
        }
        if (pager > (adjacents)) {
            pageHtml += '<li class="hidden-xs"><span>...</span></li>';
        }
        pmin = (pager > adjacents) ? (pager - adjacents) : 1;
        pmax = (pager < (data.noOfPage - adjacents)) ? (pager + adjacents) : data.noOfPage
        for (var i = pmin; i <= pmax; i++) {
            if (i == data.currentPage) {
                pageHtml += '<li class="active"><a style="cursor: pointer;"><span>' + i + '</span></a></li>';
            }
            else if (i == 1) {
                pageHtml += '<li class="hidden-xs"><a style="cursor: pointer;" (click)="parent.' + method + '(' + i + ',$event)">' + i + '</a></li>';
            }
            else {
                pageHtml += '<li class="hidden-xs"><a style="cursor: pointer;" (click)="parent.' + method + '(' + i + ',$event)">' + i + '</a></li>';
            }
        }
        if (pager < ((data.noOfPage - adjacents) - 1)) {
            pageHtml += '<li class="hidden-xs"><span>...</span></li>';
        }
        if (pager < (data.noOfPage - adjacents)) {
            pageHtml += '<li><a style="cursor: pointer;" (click)="parent.' + method + '(' + data.noOfPage + ',$event)">' + data.noOfPage + '</a></li>';
        }
        if (data.currentPage == data.noOfPage) {
            pageHtml += '<li class="disabled"><a>Next <i class="zmdi zmdi-chevron-right zmdi-hc-fw"></i></a></li>';
        }
        else {
            pageHtml += '<li><a style="cursor: pointer;" (click)="parent.' + method + '(' + data.nextPage + ',$event)">Next <i class="zmdi zmdi-chevron-right zmdi-hc-fw"></i></a></li>';
        }
        pageHtml += '</ul>';
        return pageHtml;
    }
	/**
	 * 
	 * @param needle	string
	 * @param haystack 	array
	 * 
	 * @returns boolean
	 */
	public in_array(needle: any, haystack: any){
        for(var i in haystack) {
            if(haystack[i] == needle) return true;
        }
        return false;
	}
	/**
	 * 
	 * @param message string
	 * @param type string
	 * @param placement object
	 * @param anim objec 
	 * @returns jquery alert growl
	 */
	public notify(message, type, placement = null, anim = null) {
		// if (document.getElementsByClassName('growl-animated').length != 0) {
		// 	document.getElementsByClassName('growl-animated')[0].remove();
		// }
		let defPlace = {			
			from: 'top',
			align: 'center'
		};
		let defAnim	=	{
			enter: 'animated bounceIn',
			exit: 'animated bounceOut'
		}
		$.growl({
			message: message
		}, {
			z_index: 1080,
			type: type,
			allow_dismiss: true,
			mouse_over: "pause",
			label: 'Cancel',
			className: 'btn-xs btn-inverse',
			placement: placement == null && typeof placement !== "object" ? defPlace : placement,
			delay: 2500,
			spacing: 10,
			animate: anim == null && typeof anim !== "object" ? defAnim : anim ,
			offset: {
				x: 20,
				y: 85
			}
		});
	}
	public getParent(parentNode, childeNode, type) {
		var obj = childeNode.parentNode;
		if (type == 'tag' || type == null) {
			while (obj.tagName != parentNode) {
				obj = obj.parentNode;
			}
		}
		else if (type == 'id') {
			while (obj.id != parentNode) {
				obj = obj.parentNode;
			}
		}
		else if (type == 'class') {
			while (obj.classList.contains(parentNode) === false) {
				obj = obj.parentNode;
			}
		}
		return obj;
	}
	public closest(el, selector) {
		var matchesFn;

		// find vendor prefix
		['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
			if (typeof document.body[fn] == 'function') {
				matchesFn = fn;
				return true;
			}
			return false;
		})

		var parent;

		// traverse parents
		while (el) {
			parent = el.parentElement;
			if (parent && parent[matchesFn](selector)) {
				return parent;
			}
			el = parent;
		}

		return null;
	}	


}
