import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<h1>My Name is {{name}}</h1>
  //             <h2>And My last name is {{last_name}}</h2>`
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-app';
  name = "Samojit";
  last_name = "Paul"
  constructor(){
    setTimeout(() => {
      this.title = 'Changed Title'
    }, 4000);
  }
}
