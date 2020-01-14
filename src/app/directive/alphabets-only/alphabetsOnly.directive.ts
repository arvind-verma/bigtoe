import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[alphabetsOnly]'
})
export class AlphabetsOnlyDirective {
  @Input() private options:any;
  
  constructor(private _el: ElementRef) { }
  
  @HostListener('keydown', ['$event']) onKeyDown(event:KeyboardEvent) {
    var keyCode = event.which || event.keyCode; // I safely get the keyCode pressed from the event.
    var keyCodeChar = String.fromCharCode((96 <= keyCode && keyCode <= 105)? keyCode-48 : keyCode); // I determine the char from the keyCode.


    // If the keyCode char does not match the allowed Regex Pattern, then don't allow the input into the field.
    if ((!keyCodeChar.match(new RegExp("^[a-zA-Z]*$", "i")) || keyCode==110) && keyCode!=9 && keyCode!=8 && keyCode!=32) {
      event.preventDefault();
      return false;
  }
  }

}
