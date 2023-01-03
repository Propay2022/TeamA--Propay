import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Electricity } from '../model/Electricity';

@Injectable({
  providedIn: 'root'
})
export class ElectricityService {
elecArr : Electricity[];
  constructor(private http: HttpClient) {
    this.elecArr = [];
   }

  insertElectricity(e : Electricity){
    this.http.post("http://localhost:1111/project/insertElectricity", e).subscribe();
    return "Inserted successfully";

  }
  electricityHistory(){
    this.http.get<Electricity[]>("http://localhost:1111/project/electricity").subscribe(data => this.elecArr = data);
    return this.elecArr;
  }}
