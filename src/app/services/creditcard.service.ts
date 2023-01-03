import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditCard } from '../model/CreditCard';

@Injectable({
  providedIn: 'root'
})
export class CreditcardService {
creditArr : CreditCard[];
  constructor(private http: HttpClient) {
    this.creditArr = [];
   }

  creditInsert(credit: CreditCard){
    this.http.post("http://localhost:1111/project/insertCredit", credit).subscribe();
    return "Inserted successfully";
  }
  creditHistory(){
    this.http.get<CreditCard[]>("http://localhost:1111/project/creditcard").subscribe(data => this.creditArr = data);
    return this.creditArr;
  }
}
