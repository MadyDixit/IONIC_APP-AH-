import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../userService/auth-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private authService: AuthServiceService) { }
  login(email: any, password: any) {
    console.log(email.value, password.value)
    console.log("Working");
    this.authService.SignIn(email.value, password.value).then((res) => {
      console.log("successfully login");
      this.route.navigate(['tabs'])
    }).catch((err) => {
      window.alert(err.message);
    })
  }

  ngOnInit() { }

}
