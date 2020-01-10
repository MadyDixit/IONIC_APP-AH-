import { DataService } from './../services/data.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: any;
  name: any;
  it: any;

  constructor(public afDB: AngularFireDatabase, public service: DataService) {
    this.items = afDB.list('/').valueChanges().subscribe(res => {
      console.log(res)
      this.name = res
    })
  }
  detail(item: any) {
    console.log(item)
    this.service.getdata(item)
  }
}