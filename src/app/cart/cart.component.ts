import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(){
    this.getCartList();
    this.totalAmount=0;
  }

   openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition:'center',
      verticalPosition:'bottom',
    });
  }

  cartitem:any;
  shipping:any;
  totalAmount:any;
  changeQty:any;

  checkoutPrice(){

console.log(this.cartitem);
  }

  getCartList = () =>
  this.cartService
    .getCartList()
    .subscribe(res => (this.cartitem = res));

  delete(id:any){
      this.cartService.removeCartItem(id)
      .then(
        res => {
          this.openSnackBar('Item Removed From Cart');
      //    this.router.navigate(['/cart']);
        },
        err => {
          console.log(err);
        }
      )
    }


  plusQty(productId:any, qty:number, price:number ){
    if(qty>=1){
      qty=qty+1;
      var tAmount= qty*price;
      //alert('product id: '+productId+'\n QTY: '+qty+'\n TP: '+tAmount);
      this.cartService.updateCartItem(productId,qty,tAmount);
      this.openSnackBar('Item Quantity Updated!');
    }
  }

  minusQty(productId:any, qty:number, price:number ){
    if(qty>1){
      qty=qty-1;
      var tAmount= qty*price;
      //alert('product id: '+productId+'\n QTY: '+qty+'\n TP: '+tAmount);
      this.cartService.updateCartItem(productId,qty,tAmount);
      this.openSnackBar('Item Quantity Updated!');
    }

  }


  calculateAmount(){
    alert('function loaded');
  }

}
