import { Component, OnInit } from '@angular/core';
import { Inewarrival } from './newarrival';

@Component({
  selector: 'app-newarrivals',
  templateUrl: './newarrivals.component.html',
  styleUrls: ['./newarrivals.component.css']
})
export class NewarrivalsComponent implements OnInit {

  newarrivals: Inewarrival[] = [{
    'ProductId' : 1,
    'Product_name': 'Girl',
    'Product_price' : '100',
    'Product_url' : './assets/HomePageImages/img20180423_20575829.jpg'
  }
  ,
  {
   'ProductId' : 2,
   'Product_name': 'Budha',
   'Product_price' : '200',
   'Product_url' : './assets/HomePageImages/img20180423_21132884.jpg'
 },
 {
   'ProductId' : 3,
   'Product_name': 'Orange Budha',
   'Product_price' : '300',
   'Product_url' : './assets/HomePageImages/img20180423_21165214.jpg'
 }
 ];

  ngOnInit() {
  }

}
