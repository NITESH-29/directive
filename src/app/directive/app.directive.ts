import { Directive,ElementRef,OnInit } from "@angular/core";

@Directive({
    selector:'[appDirective]'
})
export class MyDirective implements OnInit{

    constructor(private elementRef:ElementRef){}
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'blue';
    }
}