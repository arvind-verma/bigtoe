import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[alphabetsWithSpace]'
})
export class AlphabetsWithSpaceDirective {
  constructor(private _el: ElementRef) { }

  @HostListener('keydown', ['$event']) onKeyDown(event:KeyboardEvent) {
    var keyCode = event.which || event.keyCode; // I safely get the keyCode pressed from the event.
    var keyCodeChar = String.fromCharCode(keyCode); // I determine the char from the keyCode.


    // If the keyCode char does not match the allowed Regex Pattern, then don't allow the input into the field.
    if (!keyCodeChar.match(new RegExp("^[a-zA-Z ]*$", "i")) && keyCode!=8) {
      event.preventDefault();
      return false;
  }
  }

//   @HostListener('keydown', ['$event']) onKeyDown1(event: KeyboardEvent) {
//     let e = <KeyboardEvent>event;
//     /* 
//         8 -  for backspace
//         9 -  for tab
//         13 - for enter
//         27 - for escape
//         46 - for delete
//     */
//     if ([8, 9, 13, 27, 46].indexOf(e.keyCode) !== -1 ||
//         // Allow: Ctrl+A
//         (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
//         // Allow: Ctrl+C
//         (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
//         // Allow: Ctrl+V
//         (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
//         // Allow: Ctrl+X
//         (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
//         // Allow: home, end, left, right
//         (e.keyCode >= 35 && e.keyCode <= 39)) {
//         // let it happen, don't do anything
//         return;
//     }
//     // Ensure that it is a number and stop the keypress
//     if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
//         e.preventDefault();
//     }
// }

  // @HostListener('input', ['$event']) onInputChange(event) {
  //   const initalValue = this._el.nativeElement.value;

  //   this._el.nativeElement.value = initalValue.replace(/[^a-zA-Z_ ]/g, '');
  //   if ( initalValue !== this._el.nativeElement.value) {
  //     event.stopPropagation();
  //   }
  // }



}
