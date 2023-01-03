import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  msg: string="";
  public user: User;

  constructor(private service: UserService) {
    this.user = new User();
   }
   reset(data: any){
    this.user.email = data.email;
    this.user.password = data.password;
    this.user.confirm_Pass = data.confirm_Pass;
     
     this.msg = this.service.resetPassword(this.user);

   }
   ngOnInit(): void {
  }
}
