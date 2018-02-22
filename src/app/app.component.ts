import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

nitesh = [
  'rani',
  'tunu'
];
    
  onClick(){
  this.nitesh.push('hello');
  console.log(this.nitesh[1]);
  alert('added')

  }
}
