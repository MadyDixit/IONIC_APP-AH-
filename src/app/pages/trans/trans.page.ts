import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trans',
  templateUrl: './trans.page.html',
  styleUrls: ['./trans.page.scss'],
})
export class TransPage implements OnInit {
  spendAmount = ""
  forReason = ""
  Presentamount
  constructor(public data: DataService) {
    this.Presentamount = data.senddata()
  }

  ngOnInit() {
  }
  up(a1) {
    this.data.updateDB();
    console.log(this.Presentamount.balance);
  }

}
