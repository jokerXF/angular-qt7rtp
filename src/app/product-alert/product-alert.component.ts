import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {

  @Input() product;
  @Output() notify = new EventEmitter();

  notifyMe(){
    this.notify.emit('子组件像父组件传输数据');
  }
  constructor() { }


  ngOnInit() {
  }

}