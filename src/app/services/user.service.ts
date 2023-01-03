import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userObj: User;

  constructor(private http: HttpClient) {
    this.userObj = new User();

  }

  signUp(u: User)  {
    this.http.post("http://localhost:1111/project/signUp", u).subscribe();
    return "Account created successfully";
  }

  loginUser(user: User):Observable<object>{
    return this.http.post("http://localhost:1111/project/login", user);
  }

  resetPassword(u: User)  {
    this.http.put("http://localhost:1111/project/changePassword", u).subscribe();
    return "Password Changed successfully";
  }
  findUser(id: string){
    this.http.get<User>("http://localhost:1111/project/User/"+id).subscribe(data => this.userObj = data);
    return this.userObj;  
}

  deleteUser(id: number){
    this.http.delete("http://localhost:1111/project/DeleteUser/"+id).subscribe();
    return "Record Deleted";
}

}
