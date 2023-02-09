import { Component } from '@angular/core';
import { AuthServiceService } from '../user/userService/auth-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private authService: AuthServiceService) {}

  signOut(){
    this.authService.SignOut().then((res)=>{
      console.log("SignOut");

    }).catch(err =>{
      window.alert(err.message);
    })
  }

}
