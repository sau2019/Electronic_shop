import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) { }

  // getting all product list

  searchProduct(value:any){
    return this.firestore.collection('products',(ref) => ref
      .where('name', '==', value.toLowerCase()));
  }

  getProductList() {
    return this.firestore.collection("products").snapshotChanges();
  }

  getCarousalList(){
    return this.firestore.collection("sliderImage").snapshotChanges();
  }

  getAdvertiseList(){
    return this.firestore.collection("Advertise").snapshotChanges();
  }
}
