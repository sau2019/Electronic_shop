import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductService } from "../services/product.service";
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  constructor(private productService: ProductService, private firestore: AngularFirestore, private _snackBar: MatSnackBar) { }

  ngOnInit(){
    this.getProductList();
    this.productQty=1;
    this.minPrice=0;
    this.maxPrice=200000;
    this.searchText="";
  }
  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
     verticalPosition:'bottom',
     horizontalPosition:'center',
     panelClass:['success-snackbar'],
    });
  }

  // productlist
  productlist:any;
  searchText:any;

  // add to cart variables
  productId:any;
  pVariant:any;
  pSize:any;
  productQty:any;
  pTotal:any;
  pCategory:any;
  pImgPath:any;
  pName:any;

  // Update modal data
  productSize:any;
  productColor:any;
  productPrice:any;

  // filter price variables
  minPrice:any;
  maxPrice:any;


  searchByName(){
    let value =this.searchText;
    this.productlist="";
    this.productlist=this.productService.searchProduct(value).snapshotChanges();
  }


  getProductList = () =>
    this.productService
      .getProductList()
      .subscribe(res => (this.productlist = res));


openModal(pid:any , price:number, size:any, color:any, name:any,category:any, imgPath:any){
 //console.log('modal activated');
 this.productColor=color;
 this.productId=pid;
 this.productPrice=price;
 this.productSize=size;
 this.pName=name;
 this.pCategory=category;
 this.pImgPath=imgPath;
}

  addtoCart(userid:any){
    this.pTotal= this.productQty*this.productPrice;
      var result=this.firestore.collection('/mycart').add({
        category:this.pCategory,
        webcolor:this.pVariant,
        imgPath:this.pImgPath,
        name:this.pName,
        price:parseInt(this.productPrice),
        productId:'',
        quantity:parseInt(this.productQty),
        size:this.pSize,
        totalAmount:this.pTotal,
        userId:userid,
        color:4280771167,
      });
      this.openSnackBar('Added Sucessfully');
    }



qtyPlus(){
  this.productQty=this.productQty+1;
}
qtyMinus(){
  if(this.productQty==1){
    this.productQty=this.productQty;
  }else{
    this.productQty=this.productQty-1;
  }
}

filterPrice(){
  alert('Min Price: '+this.minPrice+' , Max Price:'+this.maxPrice);

}

}
