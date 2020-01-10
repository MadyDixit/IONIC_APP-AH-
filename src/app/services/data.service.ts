import { account } from './../schema';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  item: account;
  items: [];
  newitem
  update_key
  refer = firebase.database().ref('/')
  add(item) {
    this.newitem = this.refer.push()
    this.newitem.set(item)
  }

  getdata(itms) {
    this.items = itms
  }
  senddata() {
    return this.items
  }
  updateDB(data, log) {
    firebase.database().ref('/').on('child_changed', function (snapshot) {
      console.log(snapshot)
    })
  }
  constructor(private firestore: AngularFirestore) { }
}
