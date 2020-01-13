import { DataService } from './../../../services/data.service';
import { DetailPageModule } from './../detail.module';
import { Component, OnInit, Input, Output, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DetailPage } from '../detail.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  @Input() showMe: boolean;
  amount;
  reasons;
  constructor(private router: Router, public sev: DataService) { }
  sub(amount, reason) {
    this.router.navigate(['/'])
    this.amount = amount
    this.reasons = reason
    this.sev.updateDB(this.amount, this.reasons)
  }
  ngOnInit() { }

}
