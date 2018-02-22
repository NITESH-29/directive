import { Directive,OnInit,HostListener ,ElementRef,Renderer2} from "@angular/core";

@Directive({
    selector:'[hostDirective]'
})
export class HostDirective {
   constructor(private elRef:ElementRef, private renderer:Renderer2){}
    @HostListener('mouseover') mouseover(){
      this.renderer.setStyle(this.elRef.nativeElement,'background-color','purple');
    }
    @HostListener('mouseleave') mouseleave(){
        this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    }
   
};

//HostListner is simply used to create some event which further change our dom