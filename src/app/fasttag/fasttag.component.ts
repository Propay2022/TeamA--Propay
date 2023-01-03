import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FasttagService } from '../services/fasttag.service';
import { Fasttag } from '../model/Fasttag';

@Component({
  selector: 'app-fasttag',
  templateUrl: './fasttag.component.html',
  styleUrls: ['./fasttag.component.css']
})
export class FasttagComponent implements OnInit{
  msg : string = "";
  public objFasttag : Fasttag;
  bill!:string;
  no!:string;
  plans!:string;

  constructor(private service : FasttagService, private router: Router){
    this.objFasttag = new Fasttag();
  }

  insertFasttag(data: any){
    this.objFasttag.biller = data.biller;
    this.objFasttag.number = data.number;
    this.objFasttag.amount = data.amount;

    this.msg = this.service.insertFasttag(this.objFasttag);
    this.router.navigate(["/payment"]);

    console.log(this.no);
    console.log(this.bill);
    console.log(this.plans);
    sessionStorage.setItem('mob',this.no);
    sessionStorage.setItem('ope',this.bill);
    sessionStorage.setItem('plans', this.plans)
  }

  ngOnInit(): void {
  }
}
