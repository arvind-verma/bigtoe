import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[numeric]'
})

export class NumericDirective {

    @HostListener('keydown', ['$event']) onKeyDown(event:KeyboardEvent) {
        var keyCode = event.which || event.keyCode; // I safely get the keyCode pressed from the event.
        var keyCodeChar = String.fromCharCode((96 <= keyCode && keyCode <= 105)? keyCode-48 : keyCode); // I determine the char from the keyCode.
    
    
        // If the keyCode char does not match the allowed Regex Pattern, then don't allow the input into the field.
        if (!keyCodeChar.match(new RegExp("^[0-9]*$", "i")) && keyCode!=8 && keyCode!=9) {
          event.preventDefault();
          return false;
      }
      }

    // @Input('numericType') numericType: string; // number | decimal

    // private regex = {
    //     number: new RegExp(/^\d+$/),
    //     decimal: new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g)
    // };

    // private specialKeys = {
    //     number: [ 'Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight' ],
    //     decimal: [ 'Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight' ],
    // };

    // constructor(private el: ElementRef) {
    // }

    // @HostListener('keydown', [ '$event' ])
    // onKeyDown(event: KeyboardEvent) {

    //     if (this.specialKeys[this.numericType].indexOf(event.key) !== -1) {
    //         return;
    //     }
    //     // Do not use event.keycode this is deprecated.
    //     // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
    //     let current: string = this.el.nativeElement.value;
    //     let next: string = current.concat(event.key);
    //     if (next && !String(next).match(this.regex[this.numericType])) {
    //         event.preventDefault();
    //     }
    // }
}