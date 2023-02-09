import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../userService/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  constructor(private route: Router, private authService: AuthServiceService) { }

  signUp(email: any, password: any){
    this.authService.RegisterUser(email.value, password.value)      
    .then((res) => {
      // Do something here
      console.log('Successfully SignUp')
      this.route.navigate(['auth/login'])
    }).catch((error) => {
      window.alert(error.message)
    })
  }

  ngOnInit() {}

}
