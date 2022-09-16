import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { NgxSpinnerService } from "ngx-spinner";
import { element } from 'protractor';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartproduct: any;
  checkPrice:any;
  cName:any;
  cMobile:any;
  cPincode:any;
  cAddress:any;
  formerror:any;
  payment:any;
  cartJSON:any;

  constructor(private cartService: CartService, private SpinnerService: NgxSpinnerService) {
  }
  ngOnInit(): void {
    this.getCartList();
    this.cName="";
    this.cMobile="";
    this.cAddress="";
    this.cPincode="";
  }

  getCartList(){
    this.cartService
    .getCartList()
    .forEach(res =>{
      this.cartproduct = res;
    });
  }

  placeOrder(){
    if(this.cName.length>0 && this.cAddress.length>0 && this.cMobile.length>0 && this.cPincode.length>0){
      this.formerror="";
        switch(this.payment){
          case 'razorpay':
            alert('razorpay');
            break;

          case 'cod':
            alert('cod');
            break;

          case 'emi':
            alert('emi');
            break;

          default:
            this.formerror="* Select a Payment Method"
            break;
        }



    }else{
      this.formerror="* All Fields are Medatory";
    }

  }
}
