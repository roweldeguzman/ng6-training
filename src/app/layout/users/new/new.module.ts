/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module'

/* Component */
import { NewComponent } from './new.component';
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
        path: '', component: NewComponent,
        children: [
            { path: "new", }
        ]
    }, {
        path: '**', component: NewComponent
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule
    ],
    declarations: [NewComponent]
})
export class NewModule { }

