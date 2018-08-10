import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppInput } from './shared/component/input/input.component';
import { ServiceService } from './services/service.service';
import { LocalStorageService } from './services/storage.service';
import { AppRoutingModule } from './app.route';

@NgModule({
	declarations: [
		AppComponent,
		AppInput
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [
		ServiceService,
		LocalStorageService, 
	],
	bootstrap: [AppComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
