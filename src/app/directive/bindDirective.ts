import { Directive ,HostBinding,HostListener} from "@angular/core";

@Directive({
    selector:'[bindDirective]'
})
export class BindDirective{

@HostBinding('style.backgroundColor') backgroundColor:string = ' transparent';

@HostListener('mouseenter') mouseover(){
    this.backgroundColor='red'
}
@HostListener('mouseleave') mouseleave(){
    this.backgroundColor = 'transparent';
}
}