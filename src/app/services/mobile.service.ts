import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mobile } from '../model/Mobile';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  mobileArr: Mobile[];
  constructor(private http: HttpClient) {
    this.mobileArr = [];
   }

  insertMobile(mb : Mobile){
    this.http.post("http://localhost:1111/project/insertMobileRecharge", mb).subscribe();
    return "Inserted successfully";

  }
  MobileHistory(){
  this.http.get<Mobile[]>("http://localhost:1111/project/mobilerecharge").subscribe(data => this.mobileArr = data);
  return this.mobileArr;
}}
