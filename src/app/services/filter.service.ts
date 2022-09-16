import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private firestore: AngularFirestore) { }
  // getting all categories list

  getCategoryList() {
    return this.firestore.collection("categories").snapshotChanges();
  }
}
