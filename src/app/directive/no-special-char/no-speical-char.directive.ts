import { Directive,HostListener } from '@angular/core';

@Directive({
  selector: '[noSpeicalChar]'
})
export class NoSpeicalCharDirective {

  constructor() { }

  @HostListener('keydown', ['$event']) onKeyDown(event:KeyboardEvent) {
    var keyCode = event.which || event.keyCode; // I safely get the keyCode pressed from the event.
    var keyCodeChar = String.fromCharCode((96 <= keyCode && keyCode <= 105)? keyCode-48 : keyCode); // I determine the char from the keyCode.


    // If the keyCode char does not match the allowed Regex Pattern, then don't allow the input into the field.
    if ((!keyCodeChar.match(new RegExp('^[!@#$%^&*(),.?":{}|<>]*$', "i")) || keyCode==110) && keyCode!=9 && keyCode!=8) {
      event.preventDefault();
      return false;
  }
  }

}
