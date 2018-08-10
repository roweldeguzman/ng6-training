import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component'
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

const routes: Routes = [
	{
		path: "",
		component: LayoutComponent,
		children: [
			{ path: 'home', loadChildren: './home/home.module#HomeModule' },
			{ path: 'about', loadChildren: './about/about.module#AboutModule' },
			{ path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsModule' },
			{ path: 'carrer', loadChildren: './carrer/carrer.module#CarrerModule' }
		],
	}, {
		path: "singlepage",
		loadChildren: './singlepage/singlepage.module#SinglepageModule',
	}, {
		path: '**', redirectTo: "/"
	}
]
@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
	],
	declarations: [
		LayoutComponent,
		HeaderComponent,
		SidebarComponent
	],
	providers: [],
	schemas: [NO_ERRORS_SCHEMA]
})
export class LayoutModule { }
