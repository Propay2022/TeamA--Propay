import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BroadBand } from '../model/Broadband';

@Injectable({
  providedIn: 'root'
})
export class BroadbandService {

  broadbandArr: BroadBand[];
  constructor(private http: HttpClient) {
    this.broadbandArr = [];
   }

  insertBroadband(bb : BroadBand){
    this.http.post("http://localhost:1111/project/insertBroadband", bb).subscribe();
    return "Inserted successfully";

  }
  broadbandHistory(){
  this.http.get<BroadBand[]>("http://localhost:1111/project/broadband").subscribe(data => this.broadbandArr = data);
  return this.broadbandArr;
}
}
