import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dth } from '../model/Dth';

@Injectable({
  providedIn: 'root'
})
export class DthService {

  dthArr: Dth[];
  constructor(private http: HttpClient) {
    this.dthArr = [];
   }

  insertDth(dth : Dth){
    this.http.post("http://localhost:1111/project/insertDth", dth).subscribe();
    return "Inserted successfully";

  }
  dthHistory(){
  this.http.get<Dth[]>("http://localhost:1111/project/dth").subscribe(data => this.dthArr = data);
  return this.dthArr;
}
}
