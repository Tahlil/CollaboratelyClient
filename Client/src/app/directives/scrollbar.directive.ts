import { NgModule, Directive, ElementRef } from "@angular/core";
@Directive({
  selector: "[appScrollbarTheme]",
})
export class ScrollbarThemeDirective {
  constructor(el: ElementRef) {
    const stylesheet = `
    ::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
	border-radius: 10px;
}

  ::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

  ::-webkit-scrollbar-thumb
{
	background-color: #3366FF;
	border-radius: 10px;
	background-image: -webkit-linear-gradient(0deg,
	                                          rgba(255, 255, 255, 0.5) 25%,
											  transparent 25%,
											  transparent 50%,
											  rgba(255, 255, 255, 0.5) 50%,
											  rgba(255, 255, 255, 0.5) 75%,
											  transparent 75%,
											  transparent)
}
    ::-webkit-scrollbar-thumb:hover {
    }
    `;

    const styleElmt = el.nativeElement.shadowRoot.querySelector("style");

    if (styleElmt) {
      styleElmt.append(stylesheet);
    } else {
      const barStyle = document.createElement("style");
      barStyle.append(stylesheet);
      el.nativeElement.shadowRoot.appendChild(barStyle);
    }
  }
}

@NgModule({
  declarations: [ScrollbarThemeDirective],
  exports: [ScrollbarThemeDirective],
})
export class ScrollbarThemeModule {}
