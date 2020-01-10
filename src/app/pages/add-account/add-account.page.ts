import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.page.html',
  styleUrls: ['./add-account.page.scss'],
})
export class AddAccountPage implements OnInit {
  condition: boolean = false
  constructor(public data: DataService) {
  }
  user = ""
  bank = ""
  Balance = ""
  item = {}
  i = 0
  ngOnInit() {
  }
  check(us) {
    if (us != '') {
      this.condition = true
    }
  }
  upload(user, bank, balance) {
    if (user != '' && bank != '' && balance != '') {
      console.log(this.user)
      console.log(this.bank)
      console.log(this.Balance)
      this.condition = true
      this.i += 1
      this.item = {
        'name': this.user,
        'bank': this.bank,
        'reason': "",
        'balance': this.Balance
      }
      this.data.add(this.item)
    }
    else {
      this.condition = false
    }
  }
}
