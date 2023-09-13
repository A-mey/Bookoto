import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[click]'
})
export class ClickCursorDirective {

  constructor() { }

  @HostBinding('style.cursor') cursor: string = 'pointer';

}
