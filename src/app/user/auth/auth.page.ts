import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPage } from '../user.page';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  
  //Variable
  route = false;
  component:any;

  constructor(private router: Router) {
    console.log(router.url)
    this.component =  UserPage
    if(router.url == '/auth/login'){
      this.route = true
    }
  }
  
  ngOnInit() {
  }


}
