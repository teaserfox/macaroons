import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[btnHover]'
})

export class BtnHoverDirective {

  @Input() btnHover: string = '';
  private defaultBtn!: string;


  constructor(private el: ElementRef,
              private rend: Renderer2) { }

  ngOnInit(): void {
    const styles: CSSStyleDeclaration = getComputedStyle(this.el.nativeElement);
    const bgImage: string = styles.backgroundImage;
    this.defaultBtn = bgImage;

    this.rend.setStyle(this.el.nativeElement, 'transition', '0.5s ease');
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.rend.setStyle(this.el.nativeElement, 'background-image', this.btnHover);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.defaultBtn.startsWith('url') || this.defaultBtn.includes('gradient')) {
      this.rend.setStyle(this.el.nativeElement, 'background-image', this.defaultBtn);
    }
  }

}



// background-image: linear-gradient( 90deg, rgb(113,8,30) 0%, rgb(215,72,92) 100%);
// background-image: linear-gradient( 90deg, rgb(252,252,252) 0%, rgb(215,72,92) 100%);
