import { DataService } from './../../services/data.service';
import { Component, OnInit, Output } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  last: any
  item;
  numbers
  flag: boolean = false
  constructor(public home: DataService, private router: Router) {
    this.item = home.senddata()
  }
  ngOnInit() { }
  add() {
    this.flag = !this.flag
    if (this.flag) {
      this.router.navigate(['/update'])
    }
  }
}