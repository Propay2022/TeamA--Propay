import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Electricity } from '../model/Electricity';
import { ElectricityService } from '../services/electricity.service';

@Component({
  selector: 'app-electricbill',
  templateUrl: './electricbill.component.html',
  styleUrls: ['./electricbill.component.css']
})
export class ElectricbillComponent implements OnInit{
  msg : string = "";
  public objElectricity : Electricity;
  bill!:string;
  no!:string;
  plans!:string;

  constructor(private service : ElectricityService, private router: Router){
    this.objElectricity = new Electricity();
  }

  insertElectricity(data: any){
    this.objElectricity.biller = data.biller;
    this.objElectricity.customer_No = data.customer_No;
    this.objElectricity.amount = data.amount;

    this.msg = this.service.insertElectricity(this.objElectricity);
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
