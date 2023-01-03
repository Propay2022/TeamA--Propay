import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fasttag } from '../model/Fasttag';


@Injectable({
  providedIn: 'root'
})
export class FasttagService {
  fasttagArr: Fasttag[];

  constructor(private http: HttpClient) {
    this.fasttagArr = [];

   }

  insertFasttag(f : Fasttag){
    this.http.post("http://localhost:1111/project/insertFasttag", f).subscribe();
    return "Inserted successfully";

  }
  fasttagHistory(){
    this.http.get<Fasttag[]>("http://localhost:1111/project/fasttag").subscribe(data => this.fasttagArr = data);
    return this.fasttagArr;
  }
}
