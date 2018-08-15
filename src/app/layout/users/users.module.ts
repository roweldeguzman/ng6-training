/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module'

/* Component */
import { UsersComponent } from './users.component';
import { UserList } from './list.component';
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        children: [
            { path: 'list', component: UserList  },
            { path: 'new', loadChildren: "./new/new.module#NewModule" },
            { path: 'edit/:fname/:lname/:email', loadChildren: "./new/new.module#NewModule" }
        ]
    }, {
        path: '**', component: UsersComponent
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule
    ],
    declarations: [UsersComponent, UserList],
    schemas: [NO_ERRORS_SCHEMA]
})
export class UsersModule { }

