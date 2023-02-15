import { Component, Input, OnInit } from '@angular/core';
import { StorageServiceService } from '../../Service/firebase/storage-service.service';
@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss'],
})
export class ExamsComponent implements OnInit {

  
  constructor(private storageServiceService: StorageServiceService) { }
  
  @Input() stream: any;
  
  ngOnInit() {
    console.log('stream', this.stream);
    
  }

}
