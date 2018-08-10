/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Component */
import { SinglepageComponent } from './singlepage.component';

/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: SinglepageComponent
	}, {
		path: '**', component: SinglepageComponent
	}
];


@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule
	],
	declarations: [SinglepageComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class SinglepageModule { }

