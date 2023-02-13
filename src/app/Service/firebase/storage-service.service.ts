import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';



@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  constructor(private angularFireStorage: AngularFireStorage, private angularFireDatabase: AngularFireDatabase) { }

  fetchStreams(){
    return new Promise((resolve, reject) => {
      console.log(this.angularFireDatabase.list('/Streams').snapshotChanges());
      const data = this.angularFireDatabase.list('/Streams').snapshotChanges()
      var streams:any = []
      data.subscribe((da) => {
        console.log(da)
        da.forEach((da1) => {
          streams.push(da1.key)
        })
        console.log(streams);
        resolve(streams)
      })
    })
  }
}
