import { Injectable, TemplateRef } from '@angular/core';
import * as $ from 'jquery';

@Injectable({ providedIn: 'root' })
export class ToastServiceService {
	toasts: any[] = [];


	showModal(){
		$("#modalContainer").show();		
	}
	showOffCanvas(){
		$("#offCanvasContainer").show();
	}
	show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
		this.toasts.push({ textOrTpl, ...options });
	}

	remove(toast: any) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	clear() {
		this.toasts.splice(0, this.toasts.length);
	}
}