import { Component, OnInit, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
  STORAGE_KEY:any;
  ngOnInit(): void {

    this.currentuser=this.storage.get(this.STORAGE_KEY);


  }

  currentuser:any;

}
