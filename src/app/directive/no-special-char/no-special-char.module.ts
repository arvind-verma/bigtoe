import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoSpeicalCharDirective} from "./no-speical-char.directive";

@NgModule({
    declarations: [NoSpeicalCharDirective],
    imports: [
        CommonModule
    ],
    exports: [
        NoSpeicalCharDirective
    ]
})
export class NoSpeicalCharModule {
}