import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NumericDirective} from "./numbers-only.directive";

@NgModule({
    declarations: [NumericDirective],
    imports: [
        CommonModule
    ],
    exports: [
        NumericDirective
    ]
})
export class NumericCharModule {
}