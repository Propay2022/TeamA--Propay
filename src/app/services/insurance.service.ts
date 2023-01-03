import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Insurance } from '../model/Insurance';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  insuranceArr: Insurance[];
  constructor(private http: HttpClient) {
    this.insuranceArr = [];
   }

  insertLpg(i : Insurance){
    this.http.post("http://localhost:1111/project/insertInsurance", i).subscribe();
    return "Inserted successfully";

  }
  InsuranceHistory(){
  this.http.get<Insurance[]>("http://localhost:1111/project/insurance").subscribe(data => this.insuranceArr = data);
  return this.insuranceArr;
}}
