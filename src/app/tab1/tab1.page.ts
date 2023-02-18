import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StorageServiceService } from '../Service/firebase/storage-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnChanges {

  streamName:any;
  selectedStream:any;
  streamSelected:any = false;

  constructor(private storageServiceService: StorageServiceService, private route: Router) {}
  ngOnInit(){
    
    console.log('Test');
    this.storageServiceService.fetchStreams().then((streams)=> {
      console.log(streams);
      this.streamName = streams
    });
  }
  ngOnChanges(){
    console.log('Test');
    this.storageServiceService.fetchStreams().then((streams)=> {
      console.log(streams);
      this.streamName = streams
    });
  }
  doRefresh(event:any){
    setTimeout(() => {
      // Any calls to load data go here
      console.log('Test');
      this.storageServiceService.fetchStreams().then((streams)=> {
        console.log(streams);
        this.streamName = streams
      });
      event.target.complete();
    }, 2000);
  };

  openTextToImage(){
    console.log('Test');
    this.storageServiceService.fetchStreams();
  }

  openExam(exam: string){
    console.log(exam);
    this.selectedStream = exam
    this.streamSelected = true
    // this.storageServiceService.fetchExam(exam, false).then((data) => {
    // }).catch((e) => {
    //   console.log(e);
    // })

    this.route.navigate(["Exams/"+ exam])

  }

}
