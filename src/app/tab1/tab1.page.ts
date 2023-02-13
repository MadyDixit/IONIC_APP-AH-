import { Component } from '@angular/core';
import { StorageServiceService } from '../Service/firebase/storage-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  streamName:any;

  constructor(private storageServiceService: StorageServiceService) {}
  ngOnInit(){
    
    console.log('Test');
    this.storageServiceService.fetchStreams().then((streams)=> {
      console.log(streams);
      this.streamName = streams
    });
  }
  openTextToImage(){
    console.log('Test');
    this.storageServiceService.fetchStreams();
  }

}
