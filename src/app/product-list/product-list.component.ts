import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 products: any[] = [{
   'ProductId' : 1,
   'Product_name': 'test1',
   'Product_price' : '100',
   'Product_url' : 'D:/Workspace two/Tlm_Frontend/src/assets/HomePageImages/multimedia-photo-icon-31 (1) (2) (2).png'
 },
 {
  'ProductId' : 2,
  'Product_name': 'test2',
  'Product_price' : '200',
  'Product_url' : 'D:/Workspace two/Tlm_Frontend/src/assets/HomePageImages/multimedia-photo-icon-31 (1) (2) (2).png'
},
{
  'ProductId' : 3,
  'Product_name': 'test3',
  'Product_price' : '300',
  'Product_url' : 'D:/Workspace two/Tlm_Frontend/src/assets/HomePageImages/multimedia-photo-icon-31 (1) (2) (2).png'
}
];

ngOnInit() {
  console.log('Hai');

  console.log(this.products[0].ProductId);
}


}
