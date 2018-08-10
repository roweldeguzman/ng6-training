/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Component */
import { ContactUsComponent } from './contact-us.component';

/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '', component: ContactUsComponent
  }, {
    path: '**', component: ContactUsComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [ContactUsComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ContactUsModule { }

