import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppInput } from './component/input/input.component';

import { RgLineDirective } from '../directives/rg-line.directive';

@NgModule({
	imports: [
		CommonModule,
        FormsModule
	],
	declarations: [
        AppInput,

        RgLineDirective
    ],
    exports: [
        FormsModule,

        AppInput,
        RgLineDirective
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
