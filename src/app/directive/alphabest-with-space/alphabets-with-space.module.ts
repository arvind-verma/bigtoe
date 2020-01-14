import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlphabetsWithSpaceDirective} from "./alphabets-with-space.directive";

@NgModule({
    declarations: [AlphabetsWithSpaceDirective],
    imports: [
        CommonModule
    ],
    exports: [
        AlphabetsWithSpaceDirective
    ]
})
export class AlphabetsWithSpaceModule {
}