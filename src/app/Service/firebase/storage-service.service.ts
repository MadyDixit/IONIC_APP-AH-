import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { rejects } from 'assert';



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
  fetchExam(stream : string){
    return new Promise((rejects, resolve) => {
      const data = this.angularFireDatabase.list('/Streams/' + stream).snapshotChanges()
      var exams:any = []
      data.subscribe((da) => {
        da.forEach((da1) => {
          exams.push(da1.key)
        })
        console.log(exams)
        resolve(exams)
      })
    })
  }
}
