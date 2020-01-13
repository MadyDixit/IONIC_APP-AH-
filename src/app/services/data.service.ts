import { Platform } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { account } from '../schema';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  item: account;
  items;
  newitem
  upval
  update_key
  ids = 0
  x: string
  re: string[] = []
  te: number[] = []

  refer = firebase.database().ref('/')
  add(item) {
    item.id = this.ids
    this.db.object("/" + this.ids).set(item)
    this.ids += 1
  }

  getdata(itms) {
    this.items = itms
  }
  senddata() {
    return this.items
  }
  constructor(private db: AngularFireDatabase) { }
  updateDB(data, log) {
    console.log(this.items.balance - data)
    this.x = this.items.reason
    this.re.push(log)
    this.te.push(data)
    console.log(this.re)
    if (this.items.balance - data > 0) {
      this.db.object('/' + this.items.id).update({ 'balance': this.items.balance - data })
      this.db.object('/' + this.items.id).update({ 'reason': this.re })
      this.db.object('/' + this.items.id).update({ 'transaction': this.te })
    }
  }
}
