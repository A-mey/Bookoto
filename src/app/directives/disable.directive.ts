import { Directive, Input } from '@angular/core';
// import { NgControl } from '@angular/forms';
import { MatInput } from '@angular/material/input';

@Directive({
  selector: '[appCustomDisable]',
})
export class CustomDisableDirective {
  // @Input() set disabledControl(state: boolean) {
  //   // const action = state ? 'disable' : 'enable';
  //   const action = 'disable';
  //   // if (this.ngControl.control) {
  //     this.ngControl.control![action]();
  //   // }
  // }

  // constructor(private readonly ngControl: NgControl) {}

  @Input() appCustomDisable : boolean | undefined;
    constructor(private matInput: MatInput) {}

    ngOnChanges() {
        this.matInput.disabled = this.appCustomDisable;
    }
}