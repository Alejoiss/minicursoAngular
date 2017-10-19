import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[marcar]'
})
export class MarcarDirective {
    marcado: boolean = false;

  constructor(
    private elementeRef: ElementRef,
    private renderer: Renderer
  ) { }

  @HostListener('click') onclick() {
    this.renderer.setElementStyle(
      this.elementeRef.nativeElement,
      'background-color',
      this.marcado ? 'white' : 'yellow'
    );

    this.marcado = !this.marcado;
  }
}
