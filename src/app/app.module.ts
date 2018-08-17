import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './app.inteceptor';
import { AppComponent } from './app.component';

import { ServiceService } from './services/service.service';
import { LocalStorageService } from './services/storage.service';
import { AppRoutingModule } from './app.route';


import { DynamicBuilder } from './shared/dynamic.builder'
@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [{
            provide: HTTP_INTERCEPTORS,
            useClass: AppInterceptor,
            multi: true,
        },
		ServiceService,
		LocalStorageService, 
        DynamicBuilder
	],
	bootstrap: [AppComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
