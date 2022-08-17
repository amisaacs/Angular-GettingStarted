import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',  // pm for Project Management
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
<    <pm-products></pm-products>>
  </div>`
})
export class AppComponent{
  pageTitle: string = 'Isaac is learning Angular!';
}