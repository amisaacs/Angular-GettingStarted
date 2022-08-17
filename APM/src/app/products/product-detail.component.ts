import { Component, OnInit } from '@angular/core';

@Component({
  //selector is only needed if nesting a component in
  //another component. Replace this with routing.
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: String = "Product Detail";

  constructor() { }

  ngOnInit(): void {
  }

}
