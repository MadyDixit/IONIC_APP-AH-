import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { StorageServiceService } from '../../Service/firebase/storage-service.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.page.html',
  styleUrls: ['./exams.page.scss'],
})
export class ExamsPage implements OnInit {

  examName: any = [];
  streamName: any = '';
  constructor(private route: Router, private examService: StorageServiceService, private routeParam: ActivatedRoute) { }

  ngAfterViewInit() {
    this.getExams()
  }
  ngOnInit(): void {
      
  }
  
  doRefresh(event:any){
    console.log(event);
    
  }
  openExam(exam:any){
    console.log(exam);
    this.route.navigate(['Exams/' + this.streamName + '/' + exam])
  }
  getExams(){
    console.log(this.routeParam.snapshot.paramMap.get('id'))
    this.streamName = this.routeParam.snapshot.paramMap.get('id')
    this.examService.fetchExam(this.streamName, true).then((data)=> {
      console.log(data);
      this.examName = data;
      console.log(this.examName);
    })
  }

}
