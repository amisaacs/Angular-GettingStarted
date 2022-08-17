import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',  // pm for Project Management
  template: `
<!-- < Replace the directive pm-products with a link to pm-products
    <pm-products></pm-products>> -->
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'><h1>{{pageTitle}}</h1></a>
      <ul class='nav nav-pills'>
        <!-- Long way to write out
        <li><a [routerLink]="['/welcome']">Home</a></li>
        <li><a [routerLink]="['/products']">Product List</a></li> -->
        <li><a class='nav-link' routerLink="/welcome">Home</a></li>
        <li><a class='nav-link' routerLink="/products">Product List</a></li>

      </ul>
    </nav>
    <div>
      <router-outlet></router-outlet>
    </div>
    `
})
export class AppComponent{
  pageTitle: string = 'Isaac is learning Angular!';
}