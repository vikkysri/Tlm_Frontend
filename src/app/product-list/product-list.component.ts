import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{

 products: any[] = [{
   "ProductId" : 1,
   "Product name": 'test1'
 },
 {
  "ProductId" : 2,
  "Product name": 'test2'
},
{
  "ProductId" : 3,
  "Product name": 'test3'
}
]

}
