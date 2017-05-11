import { Directive, Renderer2, OnInit, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent'; // tslint:disable-line:no-inferrable-types
  @Input('appBetterHighlight') highlightColor: string = 'blue'; // tslint:disable-line:no-input-rename no-inferrable-types

  // tslint:disable-next-line:no-inferrable-types
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
