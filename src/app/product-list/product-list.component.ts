import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Object>;
  constructor() {
    this.products = [
      {
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens'
      },
      {
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras'
      },
      {
        name: 'Phone Standard',
        price: 299,
        description: ''
      }
    ]
  }

  share(product){
    let desc = product.description ? product.description :'there is no description';
    window.alert(desc);
  }
  parentNotify($event){
    console.log($event);
    window.alert($event);
  }
  ngOnInit() {
  }

}