import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private firestore:AngularFirestore) { }
  getCartList() {
    return this.firestore.collection("mycart").snapshotChanges();
  }

  removeCartItem(userkey:any){
      return this.firestore.collection('mycart').doc(userkey).delete();
  }

  updateCartItem(productId:any, qty:number, tamount:number){
    return this.firestore.collection('mycart').doc(productId).update({
      productId:productId,
      quantity:qty,
      totalAmount:tamount,
    });
  }
}
