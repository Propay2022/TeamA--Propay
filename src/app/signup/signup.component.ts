import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  msg : string ="";
  public user: User;
  constructor(private service: UserService) { 
  this.user = new User();
  }
  register(data:any){
    this.user.user_Id = data.user_Id;
    this.user.name = data.name;
    this.user.mobile_No = data.mobile_No;
    this.user.email = data.email;
    this.user.password = data.password;
    this.user.confirm_Pass = data.confirm_Pass;
    
    this.msg = this.service.signUp(this.user);
  }

  ngOnInit(): void {
  }
}
