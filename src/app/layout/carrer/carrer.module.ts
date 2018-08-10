/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Component */
import { CarrerComponent } from './carrer.component';

/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '', component: CarrerComponent
  }, {
    path: '**', component: CarrerComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [CarrerComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CarrerModule { }

