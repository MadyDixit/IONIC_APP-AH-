import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(private route: Router) { }

  login(){
    console.log("Login");
    this.route.navigate(['auth/login']);
  }
  signUp(){

    this.route.navigate(['auth/signup']);
  }
  ngOnInit() {
  }

}
