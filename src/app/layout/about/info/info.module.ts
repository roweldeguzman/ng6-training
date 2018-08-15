/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Component */
import { InfoComponent } from './info.component';
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '', component: InfoComponent
  }, {
    path: '**', component: InfoComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [InfoComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class InfoModule { }

