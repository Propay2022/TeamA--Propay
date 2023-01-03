import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User = new User();
constructor(private service: UserService, private router: Router){}

userLogin(){
  this.service.loginUser(this.user).subscribe(data => {
    this.router.navigate(['/home'])
    {alert("Login Success")}; }, 
    error => alert("Enter valid credentials"))
  }
  ngOnInit(): void {
  }
}

