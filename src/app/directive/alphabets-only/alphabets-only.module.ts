import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlphabetsOnlyDirective} from "./alphabetsOnly.directive";

@NgModule({
    declarations: [AlphabetsOnlyDirective],
    imports: [
        CommonModule
    ],
    exports: [
        AlphabetsOnlyDirective
    ]
})
export class AlphabetsOnlyModule {
}