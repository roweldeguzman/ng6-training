/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Component */
import { AboutComponent } from './about.component';

/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: AboutComponent,
		children: [
			{
				path: "info",
				loadChildren: "./info/info.module#InfoModule"
			}
		]
	}, {
		path: '**', component: AboutComponent
	}
];


@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule
	],
	declarations: [AboutComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class AboutModule { }

