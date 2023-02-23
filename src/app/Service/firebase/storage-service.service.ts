import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
// import 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  constructor(private angularFireStorage: AngularFireStorage, private angularFireDatabase: AngularFireDatabase) { }
  
  cacheValue: any



  fetchStreams() {
    return new Promise((resolve, reject) => {
      console.log(this.angularFireDatabase.list('/Streams').snapshotChanges());
      const data = this.angularFireDatabase.list('/Streams').snapshotChanges()
      var streams: any = []
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
  fetchExam(stream: string, cached?: boolean) {
    return new Promise((resolve, rejects) => {
      console.log(this.angularFireDatabase.list('/Streams/' + stream).snapshotChanges());
      const data2 = this.angularFireDatabase.list('/Streams/' + stream).snapshotChanges()
      var exams: any = []
      data2.subscribe((dam) => {
        dam.forEach((dam1) => {
          exams.push(dam1.key)
        })
        console.log(exams)
        this.cacheValue = exams
        resolve(exams)
      })
    })
  }
  fetchYear(stream: string, exam: string){
    console.log(stream, exam);
    
    return new Promise((resolve, reject) => {
      const data3 = this.angularFireDatabase.list('/Streams/' + stream + '/' + exam).snapshotChanges();
      console.log(data3);
      var year:any = []
      data3.subscribe((damm) => {        
        damm.forEach((damm1) => {
          year.push(damm1.key)
        })
        console.log(year);
        resolve(year)
      })
    })
  }
  fetchDoc(stream:string, exam:string, year: string){
    console.log(year);
    
    return new Promise((resolve, reject) => {
      const data4 = this.angularFireDatabase.list('/Streams/' + stream + '/' + exam).valueChanges();
      console.log(data4);
      
      var filename:any = []
      data4.subscribe((damn) => {
        damn.forEach((data) => {
          console.log(data);
          filename.push(data)
          console.log(filename);
          console.log(filename[filename.length - 1]);
          console.log(stream + '/' + exam + '/' + year + '/' + filename[filename.length - 1]);
          const docData = this.angularFireStorage.ref(stream + '/' + exam + '/' + year + '/' + filename[filename.length - 1])
          console.log(docData);
          docData.getDownloadURL().subscribe((data) => {
            console.log(data)
            resolve(data)
          })
        })
      })
    })
  }
}
