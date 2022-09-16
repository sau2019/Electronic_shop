import { Component, OnInit, Inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FilterService } from '../services/filter.service';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private filterService: FilterService, private cartService: CartService, @Inject(LOCAL_STORAGE) private storage: StorageService,private firestore: AngularFirestore,) { }

  ngOnInit(){
    this.getCategoryList();
    if(this.storage.get(this.STORAGE_KEY)==null){
      this.signin=false;
      this.currentuser=null;
    }else{
      this.signin=true;
      this.currentuser=this.storage.get(this.STORAGE_KEY);
    }

    this.cartService.getCartList().subscribe(res=> (this.cartlength=res));
  }

  signin=false;
  currentuser:any;
  cartlength:any;
  category:any;
  firebaseuser: any;

  getCategoryList = () =>
    this.filterService
      .getCategoryList()
      .subscribe(res => (this.category = res));


      STORAGE_KEY:any;
      loginUser(username:any, password:any){

     this.firestore.collection('/user', ref => ref.where('userId', '==',username)).get()
        .subscribe(
          (res)=>{
            res.docs.forEach(
              (doc)=>{
                console.log('Firebase USer: '+doc.data());
                this.firebaseuser=doc.data();
              }
            )
          }
        );

        this.storage.set(this.STORAGE_KEY,'Saurabh');
        alert('Session Started');
       // console.log('Current Session :'+this.storage.get(this.STORAGE_KEY) );
        this.signin=true;
        this.currentuser=this.storage.get(this.STORAGE_KEY);
      }



      signOut(){
        this.storage.clear();
        this.currentuser=null;
        alert('Session Distroyed');
      }
}
