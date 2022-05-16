import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setBorder("none");
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder("3px solid blue");
  }

  // @HostListener('mouseenter') mouseover() {
  //   this.setBorder("3px solid blue");
  // }

  // @HostListener('mouseleave') mouseleave() {
  //   this.setBorder("none");
  // }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder("none");
  }

  private setBorder(color: string){

    this.el.nativeElement.style.border = color;
  }
}
