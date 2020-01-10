import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  last: any
  item;
  flag: boolean = false
  constructor(public home: DataService) {
    this.item = home.senddata()
  }
  ngOnInit() { }
  Add() {
    this.flag = true
  }
}