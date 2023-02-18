import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageServiceService } from '../../Service/firebase/storage-service.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.page.html',
  styleUrls: ['./exam.page.scss'],
})
export class ExamPage implements OnInit {

  constructor(private routeParam: ActivatedRoute, private route: Router, private storageService: StorageServiceService) { }
  examName: any;
  streamName: any;
  examYears: any;
  pdfSrc: any;
  ngOnInit() {
    this.pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
    console.log(this.routeParam.snapshot.paramMap.get('id'))
    console.log(this.routeParam.snapshot.paramMap.get('stream'))
    this.streamName = this.routeParam.snapshot.paramMap.get('stream')
    this.examName = this.routeParam.snapshot.paramMap.get('id')
    this.storageService.fetchYear(this.streamName, this.examName).then((data) => {
      console.log(data)
      this.examYears = data
    })

    // this.storageService.fetchDoc(this.streamName, this.examName, this.)
  }
  selectedYear(year:any){
    console.log(year.target.value);
    this.storageService.fetchDoc(this.streamName, this.examName, year.target.value)
    
  }

}
