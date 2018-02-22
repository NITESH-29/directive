import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyDirective } from './directive/app.directive';
import { BasicDirective } from './directive/basicDirective';
import { HostDirective } from './directive/hostDirective';
import { BindDirective } from './directive/bindDirective';
import { DropdownDirective } from './directive/dropdown.directive';



@NgModule({
  declarations: [
    AppComponent,
    MyDirective,
    BasicDirective,
    HostDirective,
    BindDirective,
    DropdownDirective,
    
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
