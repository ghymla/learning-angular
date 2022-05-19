import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  private defaultBorderColor: string = "white";
  private initBorderColor: string = "black";

  constructor(private el: ElementRef) {

    this.setBorder(this.defaultBorderColor);
  }

  @Input ('appBorderCard') border: string // alias
  // @Input() appBorderCard: string          sans-alias

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.border || this.initBorderColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.defaultBorderColor);
  }

  private setBorder(color: string){
    let borderColor = "2px solid " + color
    this.el.nativeElement.style.border = borderColor;
  }
}
