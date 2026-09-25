import { Directive, ElementRef, HostListener, Input } from '@angular/core';



@Directive({

  selector: '[appHighlight]'

})

export class HighlightDirective {

  @Input() highlightColor = 'yellow';



  constructor(private el: ElementRef) {}



  @HostListener('mouseover')

  onMouseOver() {

    this.el.nativeElement.style.backgroundColor = this.highlightColor;

  }



  @HostListener('mouseout')

  onMouseOut() {

    this.el.nativeElement.style.backgroundColor = null;

  }

}
