import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
  standalone: false,
})
export class HighlightMouseDirective {
  @HostListener('mouseenter') onMouseOver() {
    // console.log('Passou o mouse em cima');
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // console.log('Tirou o mouse de cima');
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'white'
    // );
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  // constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
}
