import { Directive,HostBinding ,HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;
  @HostBinding('style.backgroundColor')  backgroundColor:string = 'transparent';


  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen
  }
  @HostListener('click') mouseover(){
    this.backgroundColor = 'red';
  } 

}
