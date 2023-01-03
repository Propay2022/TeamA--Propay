import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  msg:String="";
  constructor(private service: UserService, private router: Router) { 
    this.user = new User();
  }
  deleteUser(id : number){
    this.msg = this.service.deleteUser(id);
    alert("account deleted");
    this.router.navigate(['/landing'])

  }
  findUser(id : string){
    this.user =  this.service.findUser(id);
  }
  reset(){
    this.router.navigate(['/reset'])
  }
  ngOnInit(): void {
  }
}
