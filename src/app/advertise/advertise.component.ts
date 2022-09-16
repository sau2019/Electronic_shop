import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.css']
})
export class AdvertiseComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(){
    this.getAdvertiseList();
  }

  advertiselist:any;

  getAdvertiseList = () =>
    this.productService
      .getAdvertiseList()
      .subscribe(res => (this.advertiselist = res));

}
