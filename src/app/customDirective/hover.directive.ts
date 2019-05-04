import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 
    console.log(element);
  }
  
  @HostListener('mouseover') onmouseover() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');
  }

  @HostListener('mouseout') onmouseout() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'white');
  }
}
