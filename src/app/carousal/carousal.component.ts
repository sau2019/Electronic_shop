import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(){
    this.getCarousalList();
  }
  carous:any;

  getCarousalList = () =>
    this.productService
      .getCarousalList()
      .subscribe(res => (this.carous = res));
}
