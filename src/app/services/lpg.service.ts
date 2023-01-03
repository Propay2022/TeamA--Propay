import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lpg } from '../model/Lpg';

@Injectable({
  providedIn: 'root'
})
export class LpgService {
lpgArr: Lpg[];
  constructor(private http: HttpClient) {
    this.lpgArr = [];
   }

  insertLpg(l : Lpg){
    this.http.post("http://localhost:1111/project/insertLpg", l).subscribe();
    return "Inserted successfully";

  }
  LpgHistory(){
  this.http.get<Lpg[]>("http://localhost:1111/project/lpg").subscribe(data => this.lpgArr = data);
  return this.lpgArr;
}
}
