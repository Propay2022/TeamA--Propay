import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LpgService } from '../services/lpg.service';
import { Lpg } from '../model/Lpg';

@Component({
  selector: 'app-gas',
  templateUrl: './gas.component.html',
  styleUrls: ['./gas.component.css']
})
export class GasComponent implements OnInit {
  msg : string = "";
  public objLpg : Lpg;
  bill!:string;
  no!:string;
  plans!:string;
  // lpgArr : Lpg[];

  constructor(private service : LpgService, private router: Router){
    this.objLpg = new Lpg();
    // this.lpgArr = this.service.findAllLpg();
  }

  insertLpg(data: any){
    this.objLpg.provider = data.provider;
    this.objLpg.customer_No = data.customer_No
    this.objLpg.mobile_No = data.mobile_No;
    this.objLpg.amount = data.amount;

    this.msg = this.service.insertLpg(this.objLpg);
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


