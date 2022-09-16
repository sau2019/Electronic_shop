import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  constructor(private router: Router,private _Activatedroute:ActivatedRoute, private firestore: AngularFirestore, private _snackBar: MatSnackBar) {
  }
  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
     verticalPosition:'top',
     horizontalPosition:'right',
     panelClass:['success-snackbar'],
    });
  }
  itemid:any;
  item:any;
  pVariant:any;
  pSize:any;
  productQTY:any;
  productImage:any;
  imgPath:any;
  initialImage:any;
  ngOnInit(): void {
  // getting parameter from route url uring activated route
    this._Activatedroute.paramMap.subscribe(params => {
      this.itemid = params.get('itemid');
  });
  this.ItemDetail(this.itemid).subscribe(res => (this.item= res));
  this.productQTY=1;
  console.log(this.item);

  }
  qtyPlus(){
    this.productQTY=this.productQTY+1;
  }
  qtyMinus(){
    if(this.productQTY==1){
      this.productQTY=this.productQTY;
    }else{
      this.productQTY=this.productQTY-1;
    }
  }
  changeImage(img:any){
    this.productImage=img;
  }
  // getting single document
  ItemDetail(id:any){
    return this.firestore.collection('/products', ref => ref.where('productId', '==',id)).snapshotChanges();
  }
  totalAmount:any;
  addToCart(category:any, webcolor:any, imgPath:any, name:any, price:any, qty:any, size:any, userid:any){
  this.totalAmount= qty*price;
    var result=this.firestore.collection('/mycart').add({
      category:category,
      webcolor:webcolor,
      imgPath:imgPath,
      name:name,
      price:parseInt(price),
      productId:'',
      quantity:parseInt(qty),
      size:size,
      totalAmount:this.totalAmount,
      userId:userid,
      color:4280771167,
    });
    this.openSnackBar('Item Added to Cart');
    this.router.navigate(['/cart']);
  }
}
