import { Directive ,Renderer2,OnInit,ElementRef} from "@angular/core";

@Directive({
    selector:'[BasicDirective]'
})
export class BasicDirective implements OnInit{
 constructor(private elRef:ElementRef, private rendere:Renderer2){}
 ngOnInit(){
     this.rendere.setStyle(this.elRef.nativeElement , 'background-color' , 'grey');
 }
}