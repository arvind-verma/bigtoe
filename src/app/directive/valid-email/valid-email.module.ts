import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ValidEmailDirective} from "./valid-email.directive";

@NgModule({
    declarations: [ValidEmailDirective],
    imports: [
        CommonModule
    ],
    exports: [
        ValidEmailDirective
    ]
})
export class ValidEmailModule {
}